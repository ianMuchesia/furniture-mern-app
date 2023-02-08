import React from 'react'
import { Link } from 'react-router-dom';
import { ProductModel } from '../../@types/type'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import cartSlice from '../../store/cartSlice';
interface Props{
  product:ProductModel;
}
const CardDescription = ({product}:Props) => {

  const dispatch = useAppDispatch()

  const { addToCart } = cartSlice.actions;

  const cartItems = useAppSelector(state=>state.cart.itemsList)

 
   const handleAddToCart=(e:React.SyntheticEvent)=>{
    e.preventDefault()
    e.stopPropagation()
    const {name, _id, price, imageUrl, rating} = product
    dispatch(addToCart({
      name,
      _id,
      price,
      imageUrl,
      rating,
    }))
    console.log(cartItems)
   
  }
  
  return (
    <>
    <div className="relative">
     
    </div>
    <Link to={`/Shop/${product._id}`} className="space-y-8 lg:divide-y lg:divide-gray-100">
      <div className="pt-8 sm:flex lg:items-end group">
        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
          <img className=" rounded-md h-48 w-full sm:w-48 object-cover transition duration-500 group-hover:scale-105 " src={product.imageUrl} alt="text"/>
        </div>
        <div>
          <div className='flex justify-between'>
          <div>
          <span className="text-sm text-gray-500">Ksh. {(product.price).toLocaleString()}</span>
          <div className="mt-3 text-lg font-medium leading-6">
            <h3 className="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl">{product.name} </h3>
          </div>
          </div>
          <button
      type='button'
        className="block w-32 h-10 p-2 text-sm font-medium transition bg-purple-800 rounded text-white hover:scale-105"
      onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      </div>

         
          
          <p className="mt-2 text-xs md:text-lg text-gray-500">{product.description}</p>
        </div>
      </div>
      
    
      </Link>
  </>
  )
}

export default CardDescription