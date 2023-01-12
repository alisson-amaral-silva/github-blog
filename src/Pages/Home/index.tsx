import { Issue } from './components/Issue'
import { Search } from './components/Search'
import { Profile } from './components/Profile'
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
