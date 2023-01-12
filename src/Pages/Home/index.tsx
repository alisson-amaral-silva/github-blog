import { Issue } from './components/Issue'
import { Search } from './components/Search'
import { Profile } from './components/Profile'
import { MainWrapper } from './styles'
import { IssuesContext } from '../../contexts/IssuesContext'
import { useContext } from 'react'

export function Home() {
  const { issues } = useContext(IssuesContext)

  return (
    <>
      <Profile />
      <Search />
      <MainWrapper>
        {issues?.map((issue) => {
          return (
            <Issue
              key={issue.title}
              title={issue.title}
              description={issue.description}
              createdAt={issue.createdAt}
            />
          )
        })}
      </MainWrapper>
    </>
  )
}
