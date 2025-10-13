import { Titulo, Logo } from './styles'
import { Container } from '../../styles'

type Props = {
  background: string
  logo: string
}

const Header = ({ background, logo }: Props) => (
  <Container style={{ backgroundImage: `url(${background})` }}>
    <Logo src={logo} alt="Efood" />
    <Titulo className="container">
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Titulo>
  </Container>
)

export default Header
