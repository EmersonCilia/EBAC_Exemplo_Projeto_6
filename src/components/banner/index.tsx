import { BannerBackground, Cozinha, Titulo, Container } from './styles'
import extraImg from '../../assets/images/image1.png'

const Banner = () => (
  <BannerBackground style={{ backgroundImage: `url(${extraImg})` }}>
    <Container className="container">
      <Cozinha>Italiana</Cozinha>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </Container>
  </BannerBackground>
)

export default Banner
