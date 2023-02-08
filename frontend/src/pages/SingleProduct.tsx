import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { fetchSingleProduct } from '../store/productActions'
import cartSlice from '../store/cartSlice'
import SingleProductSvg from '../svg/SingleProductSvg'
import SingleProductItem from '../components/SingleProductItem'

const SingleProduct = () => {
  console.log(useLocation()) 
  const {SelectedProduct} = useParams()
 

  const dispatch = useAppDispatch()
  const singleProduct = useAppSelector(state=>state.products.singleProduct)

   useEffect(()=>{
    let isMounted= true;
    if(SelectedProduct !== undefined){
      dispatch(fetchSingleProduct(SelectedProduct))
    }
    return ()=>{isMounted = false}
  },[]) 


  

  const { addToCart } = cartSlice.actions;

  const cartItems = useAppSelector(state=>state.cart.itemsList)

  useEffect(()=>{
    
  },[]) 

   const handleAddToCart=(e:React.SyntheticEvent)=>{
    e.preventDefault()
    e.stopPropagation()
    const {name, _id, price, imageUrl, rating} = singleProduct
    dispatch(addToCart({
      name,
      _id,
      price,
      imageUrl,
      rating,
    }))
    
   
  }
  
  return (
    <section className="text-gray-600 body-font overflow-hidden">
<SingleProductItem singleProduct={singleProduct} handleAddToCart={handleAddToCart}/>
</section>
  )
}

export default SingleProduct