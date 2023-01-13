import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { Issue } from './issue'

export interface IssueProps {
  id: number
  description: string
  title: string
  createdAt: string
}

export interface SearchProps {
  repo: string
  username: string
}

interface DetailsProps {
  content: string
  title: string
  user: string
  createdAt: string
  comments: number
  githubUrl: string
}

interface IssueContextType {
  search?: SearchProps
  issueDetails?: DetailsProps
  issueQuantity: number
  issues: IssueProps[]
  fetchIssues: (
    issueName?: string,
    repo?: string,
    username?: string,
  ) => Promise<void>
  fetchIssueById: (
    id: number,
    repo?: string,
    username?: string,
  ) => Promise<void>
}

export const IssuesContext = createContext<IssueContextType>(
  {} as IssueContextType,
)

interface IssuesProviderProps {
  children: ReactNode
}

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<IssueProps[]>([])
  const [issueQuantity, setIssuesQuantities] = useState<number>(0)
  const [search, setSearch] = useState<SearchProps | undefined>(undefined)
  const [issueDetails, setIssueDetails] = useState<DetailsProps | undefined>(
    undefined,
  )

  const fetchIssues = useCallback(
    async (issueName = '', repo = '', username = '') => {
      if (!repo && !username) {
        setIssues([])
      } else {
        const param = `${issueName}repo:${username}/${repo}`

        const { data } = await api.get('search/issues', {
          params: {
            q: param,
          },
        })
        const searchParams = {
          username,
          repo,
        }
        setSearch(searchParams)

        const issueList = data.items.map((issue: Issue) => {
          return {
            id: issue.number,
            description: issue.body,
            title: issue.title,
            createdAt: issue.created_at,
          }
        })

        setIssues(issueList)
        setIssuesQuantities(data.total_count)
      }
    },
    [],
  )

  useEffect(() => {
    fetchIssues()
  }, [])

  const fetchIssueById = useCallback(async (id: number) => {
    console.log('search ', search)
    const { data } = await api.get(
      `repos/${search?.username}/${search?.repo}/issues/${id}`,
    )
    const details: DetailsProps = {
      content: data.body,
      title: data.title,
      user: data.user.login,
      createdAt: data.created_at,
      comments: data.comments,
      githubUrl: data.html_url,
    }
    setIssueDetails(details)
  }, [])

  return (
    <IssuesContext.Provider
      value={{
        issues,
        fetchIssues,
        issueQuantity,
        search,
        issueDetails,
        fetchIssueById,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
