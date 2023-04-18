import React, { useEffect, useState } from 'react'
import './Feature.css'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { fetchFeaturedProducts } from '../../store/productActions'
import SingleFeaturedProduct from "./SingleFeaturedProduct"
const FeaturedProducts = () => {

  return (
    <div>
    <div className="maylike-products-wrapper">
    <h2 className='text-2xl text-center font-bold'>Featured Products this week</h2>
    <div className="marquee ">
      {/* <div className="maylike-products-container track">
        {featuredProducts.slice(index,index+2).map((item) => (
          <SingleFeaturedProduct key={item._id} item={item} />
        ))}  */}
      </div>
    </div>
</div>
  )
}

export default FeaturedProducts