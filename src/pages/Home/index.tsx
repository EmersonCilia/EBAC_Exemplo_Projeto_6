import { useEffect, useState } from 'react'

import { Restaurante } from '../../models/Items'

import ProductList from '../../components/productList'
import Header from '../../components/header'

import bannerImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  if (!restaurantes) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Header background={bannerImg} logo={logo} />
      <ProductList restaurante={restaurantes} $variant="restaurante" />
    </>
  )
}

export default Home
