import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Restaurante } from '../../models/Items'

import logo from '../../assets/images/logo.png'

import ProductList from '../../components/productList'
import Banner from '../../components/banner'
import Footer from '../../components/footer'

const Cardapio = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurante(data))
  }, [id])

  if (!restaurante) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Banner
        logo={logo}
        tipo={restaurante.tipo}
        capa={restaurante.capa}
        titulo={restaurante.titulo}
      />
      <ProductList cardapio={restaurante.cardapio} $variant="prato" />
      <Footer />
    </>
  )
}

export default Cardapio
