export interface MenuItem {
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
}

export type Restaurant = {
  capa: string
  id: number
  titulo: string
  destacado: boolean
  avaliacao: number
  tipo: string
  descricao: string
  cardapio: MenuItem[]
}
