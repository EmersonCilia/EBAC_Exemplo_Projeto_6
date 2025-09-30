import { Link } from 'react-router-dom'

import bannerImg from '../../assets/images/Vector.png'
import { Container, Titulo, Elements } from './styles'
import logo from '../../assets/images/logo.png'
import Banner from '../banner/index'

export type Props = {
  variant: 'home' | 'menu'
}

const Header = ({ variant }: Props) => (
  <Container style={{ backgroundImage: `url(${bannerImg})` }}>
    {variant === 'home' && (
      <>
        <img src={logo} alt="Efood" />
        <Titulo className="container">
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Titulo>
      </>
    )}

    {variant === 'menu' && (
      <>
        <Elements className="container">
          <Link to="/">Restaurantes</Link>
          <img src={logo} alt="Efood" />
          <p>0 produto(s) no carrinho</p>
        </Elements>
        <Banner />
      </>
    )}
  </Container>
)

export default Header
