import * as S from './styles'
import close from '../../assets/images/fechar.png'
import Button from '../button'

import { useState } from 'react'
import { MenuItem } from '../../models/Items'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  title: string
  description: string
  image: string
  price: number
  to: string
  portion: string
  item: MenuItem
}

const Cardapio = ({
  title,
  description,
  image,
  to,
  price,
  portion,
  item
}: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(item))
    dispatch(open())
  }
  const getDescription = (description: string) => {
    if (description.length > 135) return description.slice(0, 132) + '...'
    return description
  }
  const priceFormat = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <>
      <S.Card>
        <img src={image} alt={title} />
        <S.Content>
          <S.Headline>{title}</S.Headline>
          <S.Descricao>{getDescription(description)}</S.Descricao>
          <Button
            to={to}
            title="Mais detalhes"
            onClick={() => setIsVisible(true)}
          >
            Mais detalhes
          </Button>
        </S.Content>
      </S.Card>

      <S.Modal className={isVisible ? 'visivel' : ''}>
        <S.ModalContainer className="container">
          <img
            src={close}
            alt="Ícone de fechar"
            onClick={() => setIsVisible(false)}
          />
          <S.ModalContent>
            <img src={image} alt={title} />
            <div>
              <h4>{title}</h4>
              <p>
                {description}
                <br />
                <br />
                {portion}
                <br />
              </p>
              <Button
                to={to}
                title="Adicionar ao carrinho"
                onClick={() => {
                  addToCart()
                  setIsVisible(false)
                }}
              >
                Adicionar ao carrinho - {priceFormat(price)}
              </Button>
            </div>
          </S.ModalContent>
        </S.ModalContainer>

        <div className="overlay" onClick={() => setIsVisible(false)}></div>
      </S.Modal>
    </>
  )
}

export default Cardapio
