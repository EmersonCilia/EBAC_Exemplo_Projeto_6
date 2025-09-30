import Tag from '../tag'
import { Card, Content, Descricao, Headline, Infos, Nota } from './styles'
import estrela from '../../assets/images/estrela.png'
import Button from '../button'

type Props = {
  title: string
  grade?: string
  description: string
  info?: string[]
  image: string
  to: string | '#'
}
const Restaurantes = ({
  title,
  grade,
  description,
  info,
  image,
  to
}: Props) => (
  <Card>
    <img src={image} alt="placeholder" />
    <Infos>
      {info?.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Content>
      <Headline>
        <h3>{title}</h3>
        <Nota>
          {grade}
          <img src={estrela} alt="estrela" />
        </Nota>
      </Headline>
      <Descricao>{description}</Descricao>
      <Button to={to} title={'saiba mais'}>
        Saiba mais
      </Button>
    </Content>
  </Card>
)

export default Restaurantes
