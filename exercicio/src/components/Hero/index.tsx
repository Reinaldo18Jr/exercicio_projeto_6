import { Banner, Logo, Title } from './styles'

import bannerImg from '../../assets/images/fundo.png'
import logoImg from '../../assets/images/logo.png'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Logo src={logoImg} alt="Logo do efood" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </Banner>
)

export default Hero
