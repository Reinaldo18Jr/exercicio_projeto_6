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
  image: string
  starImg: string
  id: number
}

const Product = ({
  infos,
  title,
  grade,
  description,
  image,
  starImg,
  id
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
    <Card to={`/perfil/${id}`}>
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
        <Button>Saiba mais</Button>
      </Border>
    </Card>
  )
}

export default Product
