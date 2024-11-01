import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'
import Food from '../../models/Food'

import star from '../../assets/images/estrela.png'
import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'

const menu: Food[] = [
  {
    id: 1,
    image: sushi,
    infos: ['Destaque da Semana', 'Japonesa'],
    title: 'Hioki Sushi',
    grade: '4.9',
    starImg: star,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    more: 'Saiba mais'
  },
  {
    id: 2,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    starImg: star,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    more: 'Saiba mais'
  },
  {
    id: 3,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    starImg: star,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    more: 'Saiba mais'
  },
  {
    id: 4,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    starImg: star,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    more: 'Saiba mais'
  },
  {
    id: 5,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    starImg: star,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    more: 'Saiba mais'
  },
  {
    id: 6,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    starImg: star,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    more: 'Saiba mais'
  }
]

const Home = () => (
  <>
    <Hero />
    <ProductsList foods={menu} />
  </>
)

export default Home
