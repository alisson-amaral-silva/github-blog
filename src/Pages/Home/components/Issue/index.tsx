import { Container, Content, Header, LinkWrapper } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

interface IssueProps {
  id: number
  title: string
  description: string
  createdAt: string
}

export function Issue({ id, title, description, createdAt }: IssueProps) {
  const navigate = useNavigate()

  const handleLink = useCallback(() => {
    navigate(`/issue/${id}`, { replace: true, state: { id } })
  }, [id])

  return (
    <Container>
      <Header>
        <LinkWrapper onClick={handleLink}>
          <strong>{title}</strong>
        </LinkWrapper>
        <span>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </Header>
      <Content
        dangerouslySetInnerHTML={{
          __html: description.replace(/(?:\r\n|\r|\n)/g, '<br>'),
        }}
      />
    </Container>
  )
}
