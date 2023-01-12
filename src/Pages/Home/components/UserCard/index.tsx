import { useEffect, useState } from 'react'
import {
  ProfileContainer,
  Image,
  ProfileDetails,
  Header,
  Biography,
  Footer,
  Info,
} from './style'
import { api } from '../../../../lib/axios'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ProfileDetailsProps {
  name: string
  company: string
  github: string
  bio: string
  username: string
  followers: number
  img: string
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileDetailsProps>()

  async function fetchGithubProfile() {
    const response = await api.get('users/alisson-amaral-silva')
    const profileDetails = {
      name: response.data.name,
      img: response.data.avatar_url,
      company: response.data.company,
      github: response.data.html_url,
      bio: response.data.bio,
      username: response.data.login,
      followers: response.data.followers,
    }
    setProfile(profileDetails)
  }

  useEffect(() => {
    fetchGithubProfile()
  }, [])

  return (
    <ProfileContainer>
      <Image src={profile?.img} alt="imagem do perfil do github" />
      <ProfileDetails>
        <Header>
          <h1>{profile?.name}</h1>
          <a href={profile?.github} target="_blank" rel="noreferrer">
            github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Header>
        {profile?.bio && <Biography>{profile.bio}</Biography>}
        <Footer>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <span>{profile?.name}</span>
          </Info>
          {profile?.company && (
            <Info>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{profile?.name}</span>
            </Info>
          )}

          <Info>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{profile?.followers} followers</span>
          </Info>
        </Footer>
      </ProfileDetails>
    </ProfileContainer>
  )
}
