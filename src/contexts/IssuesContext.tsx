import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { Issue } from './issue'
import { AxiosError } from 'axios'
import { useGithubState } from '../lib/github'

export interface IssueProps {
  id: number
  description: string
  title: string
  createdAt: string
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
  issueQuantity: number
  issues: IssueProps[]
  error: boolean
  fetchIssues: (
    issueName?: string,
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
  const [error, setError] = useState(false)

  const fetchIssues = useCallback(
    async (issueName = '', repo = '', username = '') => {
      if (!repo && !username) {
        setIssues([])
      } else {
        try {
          const param = `${issueName}repo:${username}/${repo}`

          const { data } = await api.get('search/issues', {
            params: {
              q: param,
            },
          })

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
          setError(false)
        } catch (error) {
          setError(true)
        }
      }
    },
    [],
  )

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider
      value={{
        issues,
        issueQuantity,
        error,
        fetchIssues,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
