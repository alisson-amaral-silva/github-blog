import { Issue } from './components/Issue'
import { Search } from './components/Search'
import { Profile } from './components/UserCard'
import { MainWrapper } from './styles'

export function Home() {
  return (
    <>
      <Profile />
      <Search />
      <MainWrapper>
        <Issue />
        <Issue />
        <Issue />
        <Issue />
      </MainWrapper>
    </>
  )
}
