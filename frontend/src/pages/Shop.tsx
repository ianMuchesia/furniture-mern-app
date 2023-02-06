import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardDescription,
  Categorize,
} from "../components/ShopComponents";
import { Product } from "../@types/type";
import Loader from "../components/Loader";
import { FcList } from "react-icons/fc";
import {BsFillGridFill} from 'react-icons/bs'
const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [gridView, setgridView] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/v1/products"
        );

        if (isMounted) {
          setProducts(data.msg);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);
  console.log(products);

 
  return (
    <section className="p-10 grid md:grid-cols-3">
      <div>
      <Categorize />
      </div>
      <div className="md:col-span-2">
        <div className="flex gap-4">
          <span onClick={()=>setgridView(false)}>
      <FcList size={30}/>
      </span><span onClick={()=>setgridView(true)}><BsFillGridFill size={30}/></span>
      </div>
      <hr className="border-1 border-gray-500 m-2" />
      
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
        {loading && <Loader />}
        {gridView && products.map((product) => {
          return <Card key={product._id} product={product} />;
        })}
        
      </div>
      <div>
        {!gridView && products.map(product=>{
          return <CardDescription key={product._id} product={product}/>
        })}
      </div>
      </div>
    </section>
  );
};

export default Shop;
