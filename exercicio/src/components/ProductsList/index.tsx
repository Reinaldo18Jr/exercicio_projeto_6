import Food from '../models/Food'
import Product from '../Product'

import { Container, List } from './styles'

type Props = {
  foods: Food[]
}

const ProductsList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            infos={food.infos}
            title={food.title}
            grade={food.grade}
            description={food.description}
            more={food.more}
            image={food.image}
            starImg={food.starImg}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
