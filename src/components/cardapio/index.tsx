import {
  Card,
  Content,
  Descricao,
  Headline,
  Modal,
  ModalContainer,
  ModalContent
} from './styles'
import fechar from '../../assets/images/fechar.png'
import Button from '../button'

import { useState } from 'react'
import { CardapioItem } from '../../models/Items'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/carrinho'

type Props = {
  titulo: string
  descricao: string
  imagem: string
  preco: number
  to: string
  porcao: string
  prato: CardapioItem
}

const Cardapio = ({
  titulo,
  descricao,
  imagem,
  to,
  preco,
  porcao,
  prato
}: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
  }
  const getDescricao = (descricao: string) => {
    if (descricao.length > 135) return descricao.slice(0, 132) + '...'
    return descricao
  }
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <Card>
        <img src={imagem} alt={titulo} />
        <Content>
          <Headline>{titulo}</Headline>
          <Descricao>{getDescricao(descricao)}</Descricao>
          <Button
            to={to}
            title="Mais detalhes"
            onClick={() => setIsVisible(true)}
          >
            Mais detalhes
          </Button>
        </Content>
      </Card>

      <Modal className={isVisible ? 'visivel' : ''}>
        <ModalContainer className="container">
          <img
            src={fechar}
            alt="Ícone de fechar"
            onClick={() => setIsVisible(false)}
          />
          <ModalContent>
            <img src={imagem} alt={titulo} />
            <div>
              <h4>{titulo}</h4>
              <p>
                {descricao}
                <br />
                <br />
                {porcao}
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
                Adicionar ao carrinho - {formataPreco(preco)}
              </Button>
            </div>
          </ModalContent>
        </ModalContainer>

        <div className="overlay" onClick={() => setIsVisible(false)}></div>
      </Modal>
    </>
  )
}

export default Cardapio
