import { Link } from 'react-router-dom'

import {
  BannerBackground,
  Cozinha,
  Titulo,
  Container,
  Elements,
  CartButton
} from './styles'
import bannerImg from '../../assets/images/Vector.png'

import { open } from '../../store/reducers/carrinho'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type Props = {
  logo: string
  capa: string
  tipo: string
  titulo: string
}

const Banner = ({ titulo, tipo, capa, logo }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.carrinho)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <Container style={{ backgroundImage: `url(${bannerImg})` }}>
        <Elements className="container">
          <Link to="/">Restaurantes</Link>
          <img src={logo} alt="Efood" />
          <CartButton onClick={openCart}>
            {items.length} - produto(s)
          </CartButton>
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
