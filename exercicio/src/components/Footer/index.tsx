import { Link } from 'react-router-dom'
import { FooterContainer, Logo, Links, LinkA, Text } from './styles'

import logoImg from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Link to="/">
        <Logo src={logoImg} alt="Logo do efood" />
      </Link>
      <Links>
        <li>
          <LinkA href="#">
            <img src={instagram} alt="Instagram" />
          </LinkA>
        </li>
        <li>
          <LinkA href="#">
            <img src={facebook} alt="Facebook" />
          </LinkA>
        </li>
        <li>
          <LinkA href="#">
            <img src={twitter} alt="Twitter" />
          </LinkA>
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
