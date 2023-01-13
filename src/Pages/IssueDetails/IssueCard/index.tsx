import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom'
import { Content, Footer, Header, Info, IssueDetailsContainer } from './styles'
interface IssueCardProps {
  title?: string
  github?: string
  username?: string
  createdDate?: string
  comments?: number
}

export function IssueCard({
  title,
  github,
  username,
  createdDate,
  comments,
}: IssueCardProps) {
  return (
    <IssueDetailsContainer>
      <Content>
        <Header>
          <Link to={'/'}>
            <strong>
              <FontAwesomeIcon icon={faChevronLeft} /> voltar
            </strong>
          </Link>
          <a href={github} target="_blank" rel="noreferrer">
            ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Header>
        <h1>{title}</h1>
        <Footer>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <span>{username}</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faCalendarDay} />
            {createdDate && (
              <span>
                {formatDistanceToNow(new Date(createdDate), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            )}
          </Info>

          <Info>
            <FontAwesomeIcon icon={faComment} />
            <span>{comments} comentários</span>
          </Info>
        </Footer>
      </Content>
    </IssueDetailsContainer>
  )
}
