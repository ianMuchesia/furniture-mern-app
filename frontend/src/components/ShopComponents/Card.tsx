import React, { useState, useEffect } from 'react'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import axios from 'axios'
import { Product } from '../../@types/type'
import { Link } from 'react-router-dom'
interface Props{
    product:Product;
}
const Card = ({product}:Props) => {

   
  return (
    <Link to={`/Shop/${product._id}`} className="relative block overflow-hidden group">
  <button
    className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <img
    src={product.imageUrl}
    alt=""
    className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
  />

  <div className="relative p-6 bg-white border border-gray-100">
   {/*  <span
      className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
    >
      New
    </span> */}

    <h3 className="mt-4 text-lg font-medium text-gray-900">{product.name}</h3>

    <p className="mt-1.5 text-sm text-gray-700">Ksh. {(product.price).toLocaleString()}</p>

    <form className="mt-4">
      <button
        className="block w-full p-4 text-sm font-medium transition bg-yellow-400 rounded hover:scale-105"
      >
        Add to Cart
      </button>
    </form>
  </div>
</Link>

     
      
   
  )
}

export default Card