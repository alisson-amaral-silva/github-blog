import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MoonLoader } from 'react-spinners'
import { ProfileDetails } from '../../../../contexts/profile-details'
import { useGithubState } from '../../../../lib/github'
import {
  Biography,
  Footer,
  Header,
  Image,
  Info,
  LoadingWrapper,
  ProfileContainer,
  ProfileDetailsWrapper,
} from './styles'

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
  const { data, isFetching } = useGithubState('users/alisson-amaral-silva')
  const user = data as ProfileDetails

  return (
    <ProfileContainer>
      {isFetching ? (
        <LoadingWrapper>
          <MoonLoader color="#3294F8" />
        </LoadingWrapper>
      ) : (
        <>
          <Image src={user?.avatar_url} alt="imagem do perfil do github" />
          <ProfileDetailsWrapper>
            <Header>
              <h1>{user?.name}</h1>
              <a href={user?.html_url} target="_blank" rel="noreferrer">
                github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Header>
            {user?.bio && <Biography>{user.bio}</Biography>}
            <Footer>
              <Info>
                <FontAwesomeIcon icon={faGithub} />
                <span>{user?.login}</span>
              </Info>
              {user?.company && (
                <Info>
                  <FontAwesomeIcon icon={faBuilding} />
                  <span>{user.company}</span>
                </Info>
              )}

              <Info>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{user?.followers} followers</span>
              </Info>
            </Footer>
          </ProfileDetailsWrapper>
        </>
      )}
    </ProfileContainer>
  )
}
