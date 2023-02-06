import React from 'react'
import {Features, Hero, ProductListsCategoriesGrid} from "../components/HomeComponents"
const Home = () => {
  return (
    <section className='mx-8 '>
      <Hero/>
      <Features/>
      <ProductListsCategoriesGrid/>
    </section>
  )
}

export default Home