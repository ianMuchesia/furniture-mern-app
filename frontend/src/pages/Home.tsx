import React from 'react'
import {FeaturedProducts, Features, Hero, ProductListsCategoriesGrid} from "../components/HomeComponents"
const Home = () => {
  return (
    <section className='mx-8 '>
      <Hero/>
      <FeaturedProducts/>
      <Features/>
      <ProductListsCategoriesGrid/>
    </section>
  )
}

export default Home