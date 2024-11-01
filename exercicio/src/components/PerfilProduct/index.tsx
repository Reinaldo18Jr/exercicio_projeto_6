import {
  Container,
  List,
  Card,
  PizzaImg,
  PizzaName,
  Description,
  Button
} from './styles'

import pizza from '../../assets/images/pizza.png'

const PerfilProduct = () => (
  <Container>
    <div className="container">
      <List>
        <li>
          <Card>
            <PizzaImg src={pizza} alt="Pizza" />
            <PizzaName>Pizza Marguerita</PizzaName>
            <Description>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Description>
            <Button href="#">Adicionar ao carrinho</Button>
          </Card>
        </li>
        <li>
          <Card>
            <PizzaImg src={pizza} alt="Pizza" />
            <PizzaName>Pizza Marguerita</PizzaName>
            <Description>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Description>
            <Button href="#">Adicionar ao carrinho</Button>
          </Card>
        </li>
        <li>
          <Card>
            <PizzaImg src={pizza} alt="Pizza" />
            <PizzaName>Pizza Marguerita</PizzaName>
            <Description>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Description>
            <Button href="#">Adicionar ao carrinho</Button>
          </Card>
        </li>
        <li>
          <Card>
            <PizzaImg src={pizza} alt="Pizza" />
            <PizzaName>Pizza Marguerita</PizzaName>
            <Description>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Description>
            <Button href="#">Adicionar ao carrinho</Button>
          </Card>
        </li>
        <li>
          <Card>
            <PizzaImg src={pizza} alt="Pizza" />
            <PizzaName>Pizza Marguerita</PizzaName>
            <Description>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Description>
            <Button href="#">Adicionar ao carrinho</Button>
          </Card>
        </li>
        <li>
          <Card>
            <PizzaImg src={pizza} alt="Pizza" />
            <PizzaName>Pizza Marguerita</PizzaName>
            <Description>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Description>
            <Button href="#">Adicionar ao carrinho</Button>
          </Card>
        </li>
      </List>
    </div>
  </Container>
)

export default PerfilProduct
