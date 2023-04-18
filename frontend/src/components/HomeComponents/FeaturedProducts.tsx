import React, { useEffect, useState } from "react";
import { baseURL } from "../../service/index";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import SingleFeaturedProduct from "./SingleFeaturedProduct";
import { ProductModel } from "../../@types/type";

export const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<ProductModel[]>([]);

  console.log(baseURL);
  useEffect(() => {
    let isMounted = true;
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch(`${baseURL}products?featured=true`);
        const data = await response.json();

        if (isMounted && data.success) {
          setFeaturedProducts(data.msg);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchFeaturedProducts();
    return () => {
      isMounted = false;
    };
  }, []);
  console.log(featuredProducts);



  return (
    <div className="my-10">
      <div className="maylike-products-wrapper">
        <h2 className="text-2xl text-center font-bold">
          Featured Products this week
        </h2>
        <div className="marquee grid grid-cols-2 gap-1 sm:grid-cols-3 place-items-center lg:grid-cols-6 ">
          {
            featuredProducts.slice(0,12).map(product=>{
              return(
                <SingleFeaturedProduct key={product._id} product={product}/>
              )
            })
          }
          
          
        </div>
      </div>
    </div>
  );
};

export const MemoizedFeaturedProducts = React.memo(FeaturedProducts);
