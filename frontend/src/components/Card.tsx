import React, { useState, useEffect } from 'react'
import './Card.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import axios from 'axios'
import { Product } from '../@types/type'
interface Props{
    product:Product;
}
const Card = ({product}:Props) => {

   
  return (
    <div className="card">
    <div className="card-img">
        <img src={product.imageUrl} alt={product.name}/>
    </div>
    <div className="card-info">
      <p className="text-title">{product.name} </p>
      <p className="text-body">Product description and details</p>
    </div>
    <div className="card-footer">
    <span className="text-title">
        Ksh. {product.price}
    </span>
    <div className="card-button">
      <AiOutlineShoppingCart className="svg-icon"/>
        
    </div>
  </div></div>
  )
}

export default Card