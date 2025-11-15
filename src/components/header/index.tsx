import { Title, Logo } from './styles'
import { Container } from '../../styles'

type Props = {
  background: string
  logo: string
}

const Header = ({ background, logo }: Props) => (
  <Container style={{ backgroundImage: `url(${background})` }}>
    <Logo src={logo} alt="Efood" />
    <Title className="container">
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Title>
  </Container>
)

export default Header
