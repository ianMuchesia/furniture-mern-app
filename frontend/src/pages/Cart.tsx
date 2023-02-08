import React from 'react'
import CartItem from '../components/CartComponents/CartItem'
import CartPriceCount from '../components/CartComponents/CartPriceCount'
import { useAppSelector } from '../hooks/reduxHooks'

const Cart = () => {
  const cartItems = useAppSelector(state=>state.cart.itemsList)

  

 

  return (
    <section>
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-purple-800 sm:text-4xl">Your Cart</h1>
        </div>
  
        <div className="mt-8">
          <ul className="space-y-4">
            {cartItems.map(item=>{
              return  <CartItem key={item._id} item={item}/>
            })}
          
  
            
          </ul>
          <CartPriceCount/>
         
        </div>
      </div>
    </div>
  </section>
  )
}

export default Cart