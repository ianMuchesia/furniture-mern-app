import React from 'react';
import { Link } from 'react-router-dom';
import { ProductModel } from '../../@types/type';

interface Props{
    product:ProductModel;
}


const SingleFeaturedProduct = ({product}:Props) => {
  return (
    <div className=''>
      <Link to={`/Shop/${product._id}`}>
        <div className="product-card">
          <img 
            src={product.imageUrl}
          
            className="product-image w-[150px] h-[150px] sm:h-[200px] sm:w-[200px]"
          />
          <p className="product-name">{product.name}</p>
          <p className="product-price">Ksh. {product.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default SingleFeaturedProduct