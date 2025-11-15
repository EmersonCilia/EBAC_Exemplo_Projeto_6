import { Container, List } from './styles'
import { MenuItem, Restaurant } from '../../models/Items'

import Restaurants from '../restaurants'
import Menu from '../menu'

export type Props = {
  $variant: 'restaurant' | 'menu'
  restaurant?: Restaurant[]
  menu?: MenuItem[]
}

const ProductList = ({ restaurant, $variant, menu }: Props) => {
  return (
    <Container>
      <div className="container">
        <List $variant={$variant}>
          {$variant === 'restaurant' &&
            restaurant?.map((r) => (
              <li key={r.id}>
                <Restaurants
                  description={r.descricao}
                  cape={r.capa}
                  type={r.tipo}
                  title={r.titulo}
                  hightlight={r.destacado}
                  evalutation={r.avaliacao}
                  to={`menu/${r.id}`}
                />
              </li>
            ))}

          {$variant === 'menu' &&
            menu?.map((item) => (
              <li key={item.id}>
                <Menu
                  description={item.descricao}
                  image={item.foto}
                  title={item.nome}
                  price={item.preco}
                  portion={item.porcao}
                  to=""
                  item={item}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
