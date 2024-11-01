class Food {
  infos: string[]
  title: string
  grade: string
  description: string
  more: string
  image: string
  starImg: string
  id: number

  constructor(
    infos: string[],
    title: string,
    grade: string,
    description: string,
    more: string,
    image: string,
    starImg: string,
    id: number
  ) {
    this.infos = infos
    this.title = title
    this.grade = grade
    this.description = description
    this.more = more
    this.image = image
    this.starImg = starImg
    this.id = id
  }
}

export default Food
