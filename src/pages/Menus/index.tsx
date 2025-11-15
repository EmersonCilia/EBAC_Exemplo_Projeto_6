import { useParams } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

import ProductList from '../../components/productList'
import Banner from '../../components/banner'
import { useGetCardapioQuery } from '../../services/api'

type MenuParams = {
  id: string
}

const Menu = () => {
  const { id } = useParams() as MenuParams

  const { data: menu } = useGetCardapioQuery(id)

  if (!menu) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Banner
        logo={logo}
        type={menu.tipo}
        cape={menu.capa}
        title={menu.titulo}
      />
      <ProductList menu={menu.cardapio} $variant="menu" />
    </>
  )
}

export default Menu
