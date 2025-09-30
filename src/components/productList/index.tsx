import { Container, List } from './styles'
import Items from '../../models/Items'
import Restaurantes from '../restaurantes'
import Pratos from '../pratos'

export type Props = {
  $variant: 'restaurante' | 'prato'
  items: Items[]
}

const ProductList = ({ items, $variant }: Props) => (
  <Container>
    <div className="container">
      <List $variant={$variant}>
        {$variant === 'restaurante' &&
          items.map((restaurante) => (
            <Restaurantes
              key={restaurante.id}
              description={restaurante.description}
              image={restaurante.image}
              info={restaurante.info}
              title={restaurante.title}
              grade={restaurante.grade}
              to={restaurante.to}
            />
          ))}

        {$variant === 'prato' &&
          items.map((prato) => (
            <Pratos
              key={prato.id}
              description={prato.description}
              image={prato.image}
              title={prato.title}
              to={prato.to}
            />
          ))}
      </List>
    </div>
  </Container>
)

export default ProductList
