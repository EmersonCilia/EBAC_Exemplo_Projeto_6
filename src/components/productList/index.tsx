import { Container, List } from './styles'
import { CardapioItem, Restaurante } from '../../models/Items'
import Restaurantes from '../restaurantes'
import Cardapio from '../cardapio'

export type Props = {
  $variant: 'restaurante' | 'cardapio'
  restaurante?: Restaurante[]
  cardapio?: CardapioItem[]
}

const ProductList = ({ restaurante, $variant, cardapio }: Props) => {
  return (
    <Container>
      <div className="container">
        <List $variant={$variant}>
          {$variant === 'restaurante' &&
            restaurante?.map((r) => (
              <li key={r.id}>
                <Restaurantes
                  descricao={r.descricao}
                  capa={r.capa}
                  tipo={r.tipo}
                  titulo={r.titulo}
                  destacado={r.destacado}
                  avaliacao={r.avaliacao}
                  to={`cardapio/${r.id}`}
                />
              </li>
            ))}

          {$variant === 'cardapio' &&
            cardapio?.map((cardapio) => (
              <li key={cardapio.id}>
                <Cardapio
                  descricao={cardapio.descricao}
                  imagem={cardapio.foto}
                  titulo={cardapio.nome}
                  preco={cardapio.preco}
                  porcao={cardapio.porcao}
                  to=""
                  prato={cardapio}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
