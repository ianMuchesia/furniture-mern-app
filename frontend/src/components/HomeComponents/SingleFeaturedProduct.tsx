import React from 'react';
import { Link } from 'react-router-dom';
import { ProductModel } from '../../@types/type';

interface Props{
    item:ProductModel;
}


const SingleFeaturedProduct = ({item}:Props) => {
  return (
    <div className=''>
      <Link to={`/Shop/${item._id}`}>
        <div className="product-card">
          <img 
            src={item.imageUrl}
          
            className="product-image w-[200px] h-[200px]"
          />
          <p className="product-name">{item.name}</p>
          <p className="product-price">Ksh. {item.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default SingleFeaturedProduct