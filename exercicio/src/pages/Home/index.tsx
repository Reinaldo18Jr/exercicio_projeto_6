import { useEffect, useState } from 'react'

import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'

// tentando tipar com a API, esse seria apenas para o Home?
export type Food = {
  id: number
  titulo: string
  tags: {
    destacado?: string[]
    tipo: string
  }
  avaliacao: string
  descricao: string
  capa: string
}

const Home = () => {
  const [menu, setMenu] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((resp) => resp.json())
      .then((resp) => setMenu(resp))
  }, [])

  return (
    <>
      <Hero />
      <ProductsList foods={menu} />
    </>
  )
}

export default Home
