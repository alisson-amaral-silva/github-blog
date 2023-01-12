import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { api } from '../../../lib/axios'
import { Content, Footer, Header, Info, IssueDetailsContainer } from './styles'
import { Link } from 'react-router-dom'

interface ProfileProps {
  github: string
  name: string
}

export function IssueCard() {
  const [profile, setProfile] = useState<ProfileProps>()

  async function fetchGithubProfile() {
    const response = await api.get('users/alisson-amaral-silva')
    const issueCardDetails = {
      github: response.data.html_url,
      name: response.data.name,
    }
    setProfile(issueCardDetails)
  }

  useEffect(() => {
    fetchGithubProfile()
  }, [])
  return (
    <IssueDetailsContainer>
      <Content>
        <Header>
          <Link to={'/'}>
            <strong>
              <FontAwesomeIcon icon={faChevronLeft} /> voltar
            </strong>
          </Link>
          <a href={profile?.github} target="_blank" rel="noreferrer">
            ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Header>
        <h1>JavaScript data types and data structures</h1>
        <Footer>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <span>{profile?.name}</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </Info>

          <Info>
            <FontAwesomeIcon icon={faComment} />
            <span> 5 comentários</span>
          </Info>
        </Footer>
      </Content>
    </IssueDetailsContainer>
  )
}
