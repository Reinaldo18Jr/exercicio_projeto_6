import { Food } from '../../pages/Home'
import Product from '../Product'

import { Container, List } from './styles'

import star from '../../assets/images/estrela.png'

type Props = {
  foods: Food[]
}

const ProductsList = ({ foods }: Props) => {
  const getFoodTags = (food: Food) => {
    const tags = []

    if (food.tags.destacado) {
      tags.push(food.tags.destacado)
    }

    if (food.tags.tipo) {
      tags.push(food.tags.tipo)
    }

    return tags
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
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
