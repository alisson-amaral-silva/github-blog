import { Issue } from './components/Issue'
import { Search } from './components/Search'
import { Profile } from './components/Profile'
import { EmptyList, MainWrapper } from './styles'
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
      {!issues.length && (
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
