import React from 'react'
import {MemoizedFeaturedProducts, Features, Hero, ProductListsCategoriesGrid} from "../components/HomeComponents"
const Home = () => {
  return (
    <section className='mx-8 '>
      <Hero/>
      <MemoizedFeaturedProducts/>
      <Features/>
      <ProductListsCategoriesGrid/>
    </section>
  )
}

export default Home