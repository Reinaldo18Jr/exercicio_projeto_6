import { useEffect, useState } from 'react'

import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'
import { Root } from '../../models'

const Home = () => {
  const [menu, setMenu] = useState<Root[]>([])

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
