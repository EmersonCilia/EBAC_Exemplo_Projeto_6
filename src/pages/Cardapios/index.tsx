import { useParams } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

import ProductList from '../../components/productList'
import Banner from '../../components/banner'
import { useGetCardapioQuery } from '../../services/api'

const Cardapio = () => {
  const { id } = useParams()

  const { data: cardapio } = useGetCardapioQuery(id!)

  if (!cardapio) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Banner
        logo={logo}
        tipo={cardapio.tipo}
        capa={cardapio.capa}
        titulo={cardapio.titulo}
      />
      <ProductList cardapio={cardapio.cardapio} $variant="cardapio" />
    </>
  )
}

export default Cardapio
