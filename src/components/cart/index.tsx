import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/carrinho'
import Button from '../button'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.carrinho)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, cur) => {
      return (acc += cur.preco ?? 0)
    }, 0)
  }

  const removeItem = (index: number) => {
    dispatch(remove(index))
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />

      <Sidebar>
        <ul>
          {items.map((item, index) => (
            <CartItem key={`${item.id}-${index}`}>
              <img src={item.foto} alt="." />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(index)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor total
          <span>{formataPreco(getTotalPrice())}</span>
        </Prices>
        <Button title="click aqui para continuar com a compra">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
