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
  infos: {
    destacado?: boolean
    tipo: string
  }
  title: string
  grade: number
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
}: Props) => {
  const showTags = () => {
    const tags: JSX.Element[] = []

    if (infos.destacado === true) {
      tags.push(<Tag>{infos.destacado}</Tag>)
    }

    if (infos.tipo) {
      tags.push(<Tag>{infos.tipo}</Tag>)
    }

    return tags
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>{showTags()}</Infos>
      <Border>
        <FlexContainer>
          <NameAndGrade>{title}</NameAndGrade>
          <div>
            <NameAndGrade>{grade}</NameAndGrade>
            <StarImg src={starImg} alt="star" />
          </div>
        </FlexContainer>
        <Text>{description}</Text>
        <Button to="/perfil">{more}</Button>
      </Border>
    </Card>
  )
}

export default Product
