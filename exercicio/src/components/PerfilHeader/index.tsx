import { Link } from 'react-router-dom'
import {
  Banner,
  Place,
  Logo,
  Cart,
  Apresentacao,
  Country,
  Name
} from './styles'

import bannerImg from '../../assets/images/fundo.png'
import logoImg from '../../assets/images/logo.png'
import apresentacaoImg from '../../assets/images/apresentacaoImg.png'

const PerfilHeader = () => (
  <>
    <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="containerHeader">
        <Place>Restaurantes</Place>
        <Link to="/">
          <Logo src={logoImg} alt="Logo do efood" />
        </Link>
        <Cart href="#">0 produto(s) no carrinho</Cart>
      </div>
    </Banner>
    <Apresentacao style={{ backgroundImage: `url(${apresentacaoImg})` }}>
      <div className="container">
        <Country>Italiana</Country>
        <Name>La Dolce Vita Trattoria</Name>
      </div>
    </Apresentacao>
  </>
)

export default PerfilHeader
