import React from "react";
import {FcCustomerSupport, FcShipped, FcSynchronize, FcApproval} from 'react-icons/fc'
import SofaSet from "../assets/sofaset.jpg"
const Features = () => {
  return (
    <section className="mt-48 dark:bg-gray-800 dark:text-gray-100 sm:mt-64 md:mt-[360px] lg:mt-[480px] xl:mt-[570px]">
      <div className="grid md:grid-cols-2 lg:mx-24 place-items-center">
        <div className="grid sm:grid-cols-2 dark:bg-violet-400 dark:text-gray-900">
            {/* card 1 */}
          <div className="p-5">
            <div className="flex items-center justify-evenly">
            <span className="text-5xl">
            <FcCustomerSupport />
              
            </span>
            
            
              <p className="text-xl font-semibold text-purple-800">
              24/7 support
              </p>
              </div>
              <div>
              <p className="leading-snug text-center">
              At HomeFurnish, we provide 24/7 support to ensure that our customers have a seamless and enjoyable shopping experience, with assistance available any time you need it.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="p-5">
            <div className="flex items-center justify-evenly">
            <span className="text-5xl">
            <FcShipped />
              
            </span>
            
            
              <p className="text-xl font-semibold text-purple-800">
              fast & free shipping
              </p>
              </div>
              <div>
              <p className="leading-snug text-center">
              HomeFurnish offers fast and free shipping on all orders, ensuring that you get your new furniture quickly and without any added cost.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="p-5">
            <div className="flex items-center justify-evenly">
            <span className="text-5xl">
            <FcApproval />
              
            </span>
            
            
              <p className="text-xl font-semibold text-purple-800">
              Easy to Shop
              </p>
              </div>
              <div>
              <p className="leading-snug text-center">
              Shop with ease on HomeFurnish, where you can find the perfect furniture for your space, with easy and convenient shopping options.
              </p>
            </div>
          </div>
          {/* card 4 */}
          <div className="p-5">
            <div className="flex items-center justify-evenly">
            <span className="text-5xl">
            <FcSynchronize />
              
            </span>
            
            
              <p className="text-xl font-semibold text-purple-800">
              Hassle free returns
              </p>
              </div>
              <div>
              <p className="leading-snug text-center">
              HomeFurnish offers hassle-free returns, making it easy for customers to return or exchange any items that do not meet their expectations.
              </p>
            </div>
          </div>
        </div>
        <div className=" dark:bg-gray-800">
          <div className="p-8 ">
            <img
              src={SofaSet}
              alt=""
              className="rounded-lg object-fill shadow-lg dark:bg-gray-500  sm:min-h-96 max-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
