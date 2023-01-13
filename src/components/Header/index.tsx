import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Container } from './styles'
export function Header() {
  return (
    <Container>
      <Link to="/" title="Home">
        <img src={logo} alt="" />
      </Link>
    </Container>
  )
}
