import React from 'react'
import { Product } from '../../@types/type'
interface Props{
  product:Product;
}
const CardDescription = ({product}:Props) => {
  return (
    <>
    <div className="relative">
     
    </div>
    <div className="space-y-8 lg:divide-y lg:divide-gray-100">
      <div className="pt-8 sm:flex lg:items-end group">
        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
          <img className=" rounded-md h-48 w-48 object-cover" src={product.imageUrl} alt="text"/>
        </div>
        <div>
          <span className="text-sm text-gray-500">Ksh. {(product.price).toLocaleString()}</span>
          <p className="mt-3 text-lg font-medium leading-6">
            <a href="./blog-post.html" className="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl">{product.name} </a>
          </p>
          <p className="mt-2 text-xs md:text-lg text-gray-500">{product.description}</p>
        </div>
      </div>
      
    
      </div>
  </>
  )
}

export default CardDescription