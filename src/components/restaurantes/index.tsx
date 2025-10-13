import Tag from '../tag'
import { Card, Content, Descricao, Headline, Infos, Nota } from './styles'
import estrela from '../../assets/images/estrela.png'
import Button from '../button'

type Props = {
  titulo: string
  avaliacao: number
  descricao: string
  tipo: string
  capa: string
  destacado: boolean
  to: string
}
const Restaurantes = ({
  titulo,
  avaliacao,
  descricao,
  tipo,
  capa,
  destacado,
  to
}: Props) => (
  <Card>
    <img src={capa} alt={`cozinha ${titulo}`} />
    <Infos>
      <Tag>{tipo}</Tag>
      {destacado && <Tag>Destaque da semana</Tag>}
    </Infos>
    <Content>
      <Headline>
        <h3>{titulo}</h3>
        <Nota>
          {avaliacao}
          <img src={estrela} alt="estrela" />
        </Nota>
      </Headline>
      <Descricao>{descricao}</Descricao>
      <Button to={to} title={'saiba mais'}>
        Saiba mais
      </Button>
    </Content>
  </Card>
)

export default Restaurantes
