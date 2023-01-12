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

interface IssueContextType {
  issueQuantity: number
  issues: IssueProps[]
  fetchIssues: (
    issueName?: string,
    repo?: string,
    username?: string,
  ) => Promise<void>
  //   fetchIssueById: (id: number) => Promise<void>
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

        const issueList = data.items.map((issue: Issue) => {
          return {
            id: issue.number,
            description: issue.body,
            title: issue.title,
            createdAt: issue.updated_at,
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

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues, issueQuantity }}>
      {children}
    </IssuesContext.Provider>
  )
}
