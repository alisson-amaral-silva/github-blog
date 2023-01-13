import { Issue } from './components/Issue'
import { Search } from './components/Search'
import { Profile } from './components/Profile'
import { EmptyList, MainWrapper } from './styles'
import { IssuesContext } from '../../contexts/IssuesContext'
import { useContext } from 'react'

export function Home() {
  const { issues, error } = useContext(IssuesContext)

  return (
    <>
      <Profile />
      <Search />
      <MainWrapper>
        {issues?.map((issue) => {
          return (
            <Issue
              id={issue.id}
              key={issue.title}
              title={issue.title}
              description={issue.description}
              createdAt={issue.createdAt}
            />
          )
        })}
      </MainWrapper>
      {error && (
        <EmptyList>
          <span>
            Digite um <strong>nome de usuario</strong> e{' '}
            <strong>repositório</strong> validos para realizar a pesquisa
          </span>
        </EmptyList>
      )}
    </>
  )
}
