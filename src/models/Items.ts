export default class Items {
  grade?: string
  description: string
  image: string
  info?: string[]
  title: string
  id: number
  to: string

  constructor(
    id: number,
    description: string,
    image: string,
    title: string,
    to: string,
    grade?: string,
    info?: string[]
  ) {
    this.id = id
    this.grade = grade ?? ''
    this.description = description
    this.image = image
    this.info = info ?? []
    this.title = title
    this.to = to
  }
}
