import React from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';

const CartPriceCount = () => {
    const Subtotal = useAppSelector(state=>state.cart.subTotal)
    
  return (
    <div className="flex justify-end pt-8 mt-8 border-t border-gray-100">
    <div className="w-screen max-w-lg space-y-4">
      <dl className="space-y-0.5 text-sm text-gray-700">
        <div className="flex justify-between">
          <dt>Subtotal</dt>
          <dd>Ksh. {Subtotal.toLocaleString()}</dd>
        </div>

        <div className="flex justify-between">
          <dt>VAT</dt>
          <dd>ksh. 25</dd>
        </div>

        <div className="flex justify-between">
          <dt>Discount</dt>
          <dd>-Ksh20</dd>
        </div>

        <div className="flex justify-between !text-base font-medium">
          <dt>Total</dt>
          <dd>Ksh. {(Subtotal-25-20).toLocaleString()}</dd>
        </div>
      </dl>

      <div className="flex justify-end">
        <span
          className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="-ml-1 mr-1.5 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
            />
          </svg>

          <p className="text-xs whitespace-nowrap">2 Discounts Applied</p>
        </span>
      </div>

      <div className="flex justify-end">
        <Link
          to="/Checkout"
          className="block px-5 py-3 text-sm text-gray-100 transition bg-purple-800 rounded hover:scale-105"
        >
          Checkout
        </Link>
      </div>
    </div>
  </div>
  )
}

export default CartPriceCount