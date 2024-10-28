import {
  Card,
  Infos,
  Tag,
  Border,
  FlexContainer,
  NameAndGrade,
  StarImg,
  Text,
  Button
} from './styles'

type Props = {
  infos: string[]
  title: string
  grade: string
  description: string
  more: string
  image: string
  starImg: string
}

const Product = ({
  infos,
  title,
  grade,
  description,
  more,
  image,
  starImg
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Border>
      <FlexContainer>
        <NameAndGrade>{title}</NameAndGrade>
        <div>
          <NameAndGrade>{grade}</NameAndGrade>
          <StarImg src={starImg} alt="star" />
        </div>
      </FlexContainer>
      <Text>{description}</Text>
      <Button href="#">{more}</Button>
    </Border>
  </Card>
)

export default Product
