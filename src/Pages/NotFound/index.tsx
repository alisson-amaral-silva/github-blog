import { Link, NavLink } from 'react-router-dom'
import notFound from '../../assets/404-error.svg'
import { NotFoundWrapper, ErrorMessage, Image, Title, Button } from './styles'

interface NotFoundProps {
  message?: string
}

export function NotFound({ message }: NotFoundProps) {
  return (
    <NotFoundWrapper>
      <Image src={notFound} alt="" />
      {message ? (
        <ErrorMessage>{message}</ErrorMessage>
      ) : (
        <Title>A página que você requisitou não foi encontrada.</Title>
      )}
      <Link to="/" title="Home">
        <Button>Voltar para pagina inicial</Button>
      </Link>
    </NotFoundWrapper>
  )
}
