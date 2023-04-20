import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

import cartSlice, { addToCart } from "../store/cartSlice";
import SingleProductSvg from "../svg/SingleProductSvg";

import SingleProductItem from "../components/SingleProductItem";
import { baseURL } from "../service";
import { ProductModel } from "../@types/type";
import { setProductsByCategory } from "../store/productSlice";
import { Card } from "../components/ShopComponents";
import Loader from "../components/Loader";

const SingleProduct = () => {
  const { SelectedProduct } = useParams();

  const dispatch = useAppDispatch();

  const [singleProduct, setSingleProduct] = useState<ProductModel>({
    _id: "",
    name: "",
    description: "",
    price: 0,
    featured: false,
    imageUrl: "",
    brand: "",
    rating: 0,
    category: "",
  });

  const [loading , setLoading ] = useState(false)

  const productsByCategory = useAppSelector(state=> state.products.categoryProducts)

  useEffect(() => {
    let isMounted = true;
    const fetchSingleProduct = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${baseURL}products/${SelectedProduct}`);
        const data = await response.json();

        if (isMounted && data.success) {
        
          console.log(data)
          setSingleProduct(data.product);
          dispatch(setProductsByCategory(data.product.category));
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleProduct();
    return () => {
      isMounted = false;
    };
  }, []);

  const cartItems = useAppSelector((state) => state.cart.itemsList);

  console.log(productsByCategory)

  const handleAddToCart = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const { name, _id, price, imageUrl, rating } = singleProduct;
    dispatch(
      addToCart({
        name,
        _id,
        price,
        imageUrl,
        rating,
      })
    );
  };
  return (
    <section className="text-gray-600 body-font overflow-hidden">
       {loading? <Loader />:(
        <>
         <SingleProductItem
        singleProduct={singleProduct}
        handleAddToCart={handleAddToCart}
      />

      <div className="">
        {productsByCategory.length>0 && <h1 className="text-center text-3xl capitalize m-3">
          You may also like these {singleProduct.category} furnitures
        </h1>}
        <div className="px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1">{
          productsByCategory.length>0 && productsByCategory.map(product=>{
            return(
              <Card key={product._id} product={product} />
            )
          })
        }
       
        </div>
      </div>
        </>
       )}
     
    </section>
  );
};

export default SingleProduct;
