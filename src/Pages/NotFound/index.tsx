import { NavLink } from 'react-router-dom'
import notFound from '../../assets/404-error.svg'
import { NotFoundWrapper, Image, Title, Button } from './styles'

export function NotFound() {
  return (
    <NotFoundWrapper>
      <Image src={notFound} />
      <Title>A página que você requisitou não foi encontrada.</Title>
      <NavLink to="/" title="Home">
        <Button>Voltar para pagina inicial</Button>
      </NavLink>
    </NotFoundWrapper>
  )
}
