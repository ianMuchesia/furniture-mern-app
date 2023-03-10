import React from 'react'
import SingleProductSvg from '../svg/SingleProductSvg'
import { ProductModel } from '../@types/type'
interface Props{
    singleProduct:ProductModel;
    handleAddToCart:(e: React.SyntheticEvent) => void;
}

const SingleProductItem = ({singleProduct, handleAddToCart}:Props) => {
   
  return (
    <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded   transition duration-500 group-hover:scale-105 " src={singleProduct.imageUrl}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{singleProduct.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{singleProduct.name}</h1>
       <SingleProductSvg rating={singleProduct.rating}/>
        <p className="leading-relaxed">{singleProduct.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        
       
        </div>
        <div className="flex">
          <span className={`title-font font-bold text-2xl text-green-800`}>Ksh. {(singleProduct.price).toLocaleString()}</span>
          <button onClick={handleAddToCart} className="flex ml-auto text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Add To Cart</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SingleProductItem