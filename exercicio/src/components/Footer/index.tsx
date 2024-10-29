import { FooterContainer, Logo, Links, Link, Text } from './styles'

import logoImg from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Logo src={logoImg} alt="Logo do efood" />
      <Links>
        <li>
          <Link href="#">
            <img src={instagram} alt="Instagram" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src={facebook} alt="Facebook" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src={twitter} alt="Twitter" />
          </Link>
        </li>
      </Links>
      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Text>
    </div>
  </FooterContainer>
)

export default Footer
