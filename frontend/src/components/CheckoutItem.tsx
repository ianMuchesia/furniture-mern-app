import React from 'react'
import { cartProductModel } from '../@types/type'
interface Props{
    item:cartProductModel;
}

const CheckoutItem = ({item}:Props) => {
  return (
    <li className="flex items-center py-4">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="object-cover w-20 h-20 rounded"
                />

                <div className="ml-4">
                  <h3 className="text-lg text-gray-900">{item.name}</h3>

                  <dl className="mt-0.5 space-y-px text-[14px] text-gray-600">
                    <div>
                      <dt className="inline">Quantity:</dt>
                      <dd className="inline">{item.quantity} X {item.price}</dd>
                    </div>

                    <div>
                      <dt className="inline">Total Price:</dt>
                      <dd className="inline font-bold text-green-600 ">Ksh. {item.totalPrice}</dd>
                    </div>
                  </dl>
                </div>
              </li>
  )
}

export default CheckoutItem