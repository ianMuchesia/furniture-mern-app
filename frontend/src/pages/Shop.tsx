import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardDescription,
  Categorize,
  Pagination,
  
} from "../components/ShopComponents";

import Loader from "../components/Loader";
import { FcList } from "react-icons/fc";
import {BsFillGridFill} from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchProducts } from "../store/productActions";
import { ProductModel } from "../@types/type";
const Shop = () => {
 
  //fetching products data
  const dispatch = useAppDispatch()
  const allProducts = useAppSelector(state=>state.products.allProducts)
  const [gridView, setgridView] = useState(true);
  const [loading, setLoading] = useState(false);

 

  useEffect(() => {
    let isMounted= true;
    setLoading(true);
    if (isMounted){
      dispatch(fetchProducts())
    }
   
    
    setLoading(false)
    return ()=>{isMounted = false}
}, []);

//page functionality
const [ currentPage, setCurrentPage] = useState(1);

const [postPerPage, setPostPerPage] = useState(8);

const lastPostIndex = currentPage * postPerPage

const firstPostIndex = lastPostIndex - postPerPage

const currentPost = allProducts.slice(firstPostIndex, lastPostIndex)

  
let pages = []

for(let i= 1;i<=Math.ceil(allProducts.length/postPerPage);i++){
  pages.push(i)
}

const handlePageClick=(page:number)=>{
  setCurrentPage(page)
}
const handlePreviousPageClick=()=>{
  if(currentPage === 1)return;
  setCurrentPage(prevPage=>prevPage-1)
}

const handleNextPageClick=()=>{
  if(currentPage === pages.length)return;
  setCurrentPage(prevPage=>prevPage+1)
}


 
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
        {gridView && currentPost?.map((product) => {
          return <Card key={product._id} product={product} />;
        })}
        
      </div>
      <div>
        {!gridView && currentPost?.map(product=>{
          return <CardDescription key={product._id} product={product}/>
        })}
      </div>
      </div>
      <Pagination pages={pages} currentPage={currentPage}  handlePageClick={handlePageClick} handleNextPageClick={handleNextPageClick} handlePreviousPageClick={handlePreviousPageClick}/>
    </section>
  );
};

export default Shop;
 