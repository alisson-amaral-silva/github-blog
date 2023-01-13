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
  loading: boolean
  issueDetails?: DetailsProps
  issueQuantity: number
  issues: IssueProps[]
  error: boolean
  errorMessage: string
  fetchIssues: (
    issueName?: string,
    repo?: string,
    username?: string,
  ) => Promise<void>
  fetchIssueById: (id: number) => Promise<void>
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
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(true)

  const [issueDetails, setIssueDetails] = useState<DetailsProps | undefined>(
    undefined,
  )

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
          const err = error as AxiosError
          setError(true)
          setErrorMessage(err.message)
        }
      }
    },
    [],
  )

  useEffect(() => {
    fetchIssues()
  }, [])

  const fetchIssueById = useCallback(async (id: number) => {
    const storedStateAsJSON = localStorage.getItem(
      '@github-glob:user-state-1.0.0',
    )
    if (storedStateAsJSON) {
      try {
        const { username, repository } = JSON.parse(storedStateAsJSON)
        const { data } = await api.get(
          `repos/${username}/${repository}/issues/${id}`,
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
        setError(false)
      } catch (error) {
        const err = error as AxiosError
        setError(true)
        setErrorMessage(err.message)
      } finally {
        setLoading(false)
      }
    } else {
      setError(true)
    }
  }, [])

  return (
    <IssuesContext.Provider
      value={{
        loading,
        issues,
        issueQuantity,
        issueDetails,
        error,
        errorMessage,
        fetchIssues,
        fetchIssueById,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
