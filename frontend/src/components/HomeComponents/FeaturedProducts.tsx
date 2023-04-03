import React, { useEffect, useState } from 'react'
import './Feature.css'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { fetchFeaturedProducts } from '../../store/productActions'
import SingleFeaturedProduct from "./SingleFeaturedProduct"
const FeaturedProducts = () => {
  const dispatch= useAppDispatch()
  const featuredProducts = useAppSelector(state=>state.products.featuredProducts)
  const [index, setIndex] = useState(0)
  useEffect(()=>{
    let isMounted=true
    if(isMounted){
      dispatch(fetchFeaturedProducts())
    }
    
    return ()=>{
      isMounted=false;
    }
  },[])
  console.log(featuredProducts)
  return (
    
    <div className="maylike-products-wrapper">
    <h2 className='text-2xl text-center font-bold'>Featured Products this week</h2>
    <div className="marquee ">
      <div className="maylike-products-container track">
        {featuredProducts.slice(index,index+2).map((item) => (
          <SingleFeaturedProduct key={item._id} item={item} />
        ))} 
      </div>
    </div>
</div>
  )
}

export default FeaturedProducts