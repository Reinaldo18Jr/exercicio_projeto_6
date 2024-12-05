import { Root } from '../../models'
import Product from '../Product'

import { Container, List } from './styles'

import star from '../../assets/images/estrela.png'

type Props = {
  foods: Root[]
}

const ProductsList = ({ foods }: Props) => {
  const getFoodTags = (food: Root) => {
    return {
      destacado: food.destacado,
      tipo: food.tipo
    }
  }

  return (
    <Container>
      <div className="container">
        <List>
          {foods.map((food) => (
            <Product
              key={food.id}
              infos={getFoodTags(food)}
              title={food.titulo}
              grade={food.avaliacao}
              description={food.descricao}
              image={food.capa}
              starImg={star}
              more={food.cardapio}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
