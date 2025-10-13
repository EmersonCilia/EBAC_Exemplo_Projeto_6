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

type Props = {
  titulo: string
  descricao: string
  imagem: string
  preco: number
  to: string
  porcao: string
}

const Cardapio = ({ titulo, descricao, imagem, to, preco, porcao }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const getDescricao = (descricao: string) => {
    if (descricao.length > 135) return descricao.slice(0, 132) + '...'
    return descricao
  }
  const formataPreco = (preco = 0): string => {
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
          <Headline>
            <h3>{titulo}</h3>
          </Headline>
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
              <Button to={to} title="Adicionar ao carrinho">
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
