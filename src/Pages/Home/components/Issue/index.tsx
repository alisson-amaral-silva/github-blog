import { Container, Content, Header } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface IssueProps {
  title: string
  description: string
  createdAt: string
}

export function Issue({ title, description, createdAt }: IssueProps) {
  return (
    <Container>
      <Header>
        <strong>{title}</strong>
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
      ></Content>
    </Container>
  )
}
