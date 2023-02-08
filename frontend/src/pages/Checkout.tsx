import React from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import CheckoutItem from "../components/CheckoutItem";
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
  const Subtotal = useAppSelector((state) => state.cart.subTotal);
  const cartItems = useAppSelector(state=>state.cart.itemsList)


  return (
    <section>
      <h1 className="sr-only">Checkout</h1>

      <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
        <div className="py-12 bg-gray-50 md:py-24">
          <div className="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
            <div className="flex items-center">
              <span className="w-10 h-10 bg-blue-700 rounded-full"></span>

              <h2 className="ml-4 font-medium text-gray-900">BambooYou</h2>
            </div>

            <div>
              <p className="text-2xl font-medium tracking-tight text-gray-900">
                Ksh.{(Subtotal - 25 - 20).toLocaleString()}
              </p>

              <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
            </div>

            <div>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-100">
                  {cartItems.map(item=><CheckoutItem key={item._id} item={item}/>)}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 bg-white md:py-24">
          <div className="max-w-lg px-4 mx-auto lg:px-8">
           <CheckoutForm/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
