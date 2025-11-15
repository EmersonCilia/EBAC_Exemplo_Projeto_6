import ProductList from '../../components/productList'
import Header from '../../components/header'
import bannerImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurante } = useGetRestaurantesQuery()

  if (!restaurante) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Header background={bannerImg} logo={logo} />
      <ProductList restaurant={restaurante} $variant="restaurant" />
    </>
  )
}

export default Home
