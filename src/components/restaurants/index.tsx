import * as S from './styles'

import Tag from '../tag'
import estrela from '../../assets/images/estrela.png'
import Button from '../button'

type Props = {
  title: string
  evalutation: number
  description: string
  type: string
  cape: string
  hightlight: boolean
  to: string
}
const Restaurants = ({
  title,
  evalutation,
  description,
  type,
  cape,
  hightlight,
  to
}: Props) => (
  <S.Card>
    <img src={cape} alt={`cozinha ${title}`} />
    <S.Infos>
      <Tag>{type}</Tag>
      {hightlight && <Tag>Destaque da semana</Tag>}
    </S.Infos>
    <S.Content>
      <S.Headline>
        <h3>{title}</h3>
        <S.Grade>
          {evalutation}
          <img src={estrela} alt="estrela" />
        </S.Grade>
      </S.Headline>
      <S.Description>{description}</S.Description>
      <Button to={to} title={'saiba mais'}>
        Saiba mais
      </Button>
    </S.Content>
  </S.Card>
)

export default Restaurants
