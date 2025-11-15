import * as S from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import facebook from '../../assets/images/facebook.png'

const Footer = () => (
  <S.Container>
    <img src={logo} alt="Efood" />
    <S.SocialMedia>
      <a href="#">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="#">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="#">
        <img src={facebook} alt="facebook" />
      </a>
    </S.SocialMedia>
    <S.Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </S.Text>
  </S.Container>
)

export default Footer
