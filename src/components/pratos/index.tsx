import { Card, Content, Descricao, Headline } from './styles'
import Button from '../button'

type Props = {
  title: string
  description: string
  image: string
  to: string
}

const Pratos = ({ title, description, image, to }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Content>
      <Headline>
        <h3>{title}</h3>
      </Headline>
      <Descricao>{description}</Descricao>
      <Button to={to} title="adicionar ao carrinho">
        Adicionar ao carrinho
      </Button>
    </Content>
  </Card>
)

export default Pratos
