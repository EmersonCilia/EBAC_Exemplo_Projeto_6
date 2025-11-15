import { Link } from 'react-router-dom'

import * as S from './styles'
import bannerImg from '../../assets/images/Vector.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type Props = {
  logo: string
  cape: string
  type: string
  title: string
}

const Banner = ({ title, type, cape, logo }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <S.Container style={{ backgroundImage: `url(${bannerImg})` }}>
        <S.Elements className="container">
          <Link to="/">Restaurantes</Link>
          <img src={logo} alt="Efood" />
          <S.CartButton onClick={openCart}>
            {items.length} - produto(s)
          </S.CartButton>
        </S.Elements>
        <S.BannerBackground style={{ backgroundImage: `url(${cape})` }}>
          <S.Container className="container">
            <S.Kitchen>{type}</S.Kitchen>
            <S.Title>{title}</S.Title>
          </S.Container>
        </S.BannerBackground>
      </S.Container>
    </>
  )
}

export default Banner
