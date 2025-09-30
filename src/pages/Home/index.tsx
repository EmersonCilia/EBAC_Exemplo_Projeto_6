import imagemSushi from '../../assets/images/image2.png'
import imagemmacarrao from '../../assets/images/image1.png'
import ProductList from '../../components/productList'
import Header from '../../components/header'
import Items from '../../models/Items'

const restaurantes: Items[] = [
  {
    id: 1,
    grade: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. \nExperimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    info: ['Destaque da semana', 'Japonesa'],
    image: imagemSushi,
    to: '#'
  },
  {
    id: 2,
    grade: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já! ',
    title: 'La Dolce Vita Trattoria',
    info: ['Italiana'],
    image: imagemmacarrao,
    to: '/menu'
  },
  {
    id: 3,
    grade: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já! ',
    title: 'La Dolce Vita Trattoria',
    info: ['Italiana'],
    image: imagemmacarrao,
    to: '/menu'
  },
  {
    id: 4,
    grade: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já! ',
    title: 'La Dolce Vita Trattoria',
    info: ['Italiana'],
    image: imagemmacarrao,
    to: '/menu'
  },
  {
    id: 5,
    grade: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já! ',
    title: 'La Dolce Vita Trattoria',
    info: ['Italiana'],
    image: imagemmacarrao,
    to: '/menu'
  },
  {
    id: 6,
    grade: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já! ',
    title: 'La Dolce Vita Trattoria',
    info: ['Italiana'],
    image: imagemmacarrao,
    to: '/menu'
  }
]

const Home = () => (
  <>
    <Header variant="home" />
    <ProductList items={restaurantes} $variant="restaurante" />
  </>
)

export default Home
