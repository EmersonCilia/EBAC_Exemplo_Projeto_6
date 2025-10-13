import {
  BannerBackground,
  Cozinha,
  Titulo,
  Container,
  Elements
} from './styles'
import bannerImg from '../../assets/images/Vector.png'

import { Link } from 'react-router-dom'

export type Props = {
  logo: string
  capa: string
  tipo: string
  titulo: string
}

const Banner = ({ titulo, tipo, capa, logo }: Props) => {
  return (
    <>
      <Container style={{ backgroundImage: `url(${bannerImg})` }}>
        <Elements className="container">
          <Link to="/">Restaurantes</Link>
          <img src={logo} alt="Efood" />
          <p>0 produto(s) no carrinho</p>
        </Elements>
        <BannerBackground style={{ backgroundImage: `url(${capa})` }}>
          <Container className="container">
            <Cozinha>{tipo}</Cozinha>
            <Titulo>{titulo}</Titulo>
          </Container>
        </BannerBackground>
      </Container>
    </>
  )
}

export default Banner
