import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardDescription,
  MemoizedCategorize,
  Pagination,
} from "../components/ShopComponents";

import Loader from "../components/Loader";
import { FcList } from "react-icons/fc";
import { BsFillGridFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

import { ProductModel } from "../@types/type";
import { baseURL } from "../service";
import { setProducts } from "../store/productSlice";
const Shop = () => {
  //fetching products data
  const dispatch = useAppDispatch();

  const [gridView, setgridView] = useState(true);
  const [loading, setLoading] = useState(false);
  const [dropdown, setDropdown] = useState(true);

  const allProducts = useAppSelector(
    (state) => state.products.filteredProducts
  );

  const brand = useAppSelector((state) => state.products.brandFilter);

  const category = useAppSelector((state) => state.products.categoryFilter);

  const priceRange = useAppSelector((state) => state.products.priceRange);

  const searchTerm = useAppSelector((state) => state.products.searchFilter);

  useEffect(() => {
    let isMounted = true;
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        let url = `${baseURL}products?`;
        console.log(category);
        if (category !== "") {
          url += `&category=${category}`;
          console.log(url);
        }
        if (brand !== "") {
          url += `&brand=${brand}`;
        }
        if (priceRange > 0) {
          url += `&numericFilters<=${priceRange}`;
        }
        if (searchTerm !== "") {
          url += `&search=${searchTerm}`;
        }

        console.log(url); 
        const response = await fetch(url);
        console.log(url); 
        const data = await response.json();

        console.log(data);
        if (data.success && isMounted) {
          dispatch(setProducts(data.products));
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
    return () => {
      isMounted = false;
    };
  }, [dispatch ,category, brand, searchTerm, priceRange]);

  //page functionality
  const [currentPage, setCurrentPage] = useState(1);

  const [postPerPage, setPostPerPage] = useState(8);

  const lastPostIndex = currentPage * postPerPage;

  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPost = allProducts.slice(firstPostIndex, lastPostIndex);

  let pages = [];

  for (let i = 1; i <= Math.ceil(allProducts.length / postPerPage); i++) {
    pages.push(i);
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  const handlePreviousPageClick = () => {
    if (currentPage === 1) return;
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPageClick = () => {
    if (currentPage === pages.length) return;
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <section className="p-10 grid md:grid-cols-3">
      <div>
        <MemoizedCategorize setDropdown={setDropdown} dropdown={dropdown} />
      </div>
      <div className="md:col-span-2">
        <div className="flex gap-4">
          <span onClick={() => setgridView(false)}>
            <FcList size={30} />
          </span>
          <span onClick={() => setgridView(true)}>
            <BsFillGridFill size={30} />
          </span>
        </div>
        <hr className="border-1 border-gray-500 m-2" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
          {loading && <Loader />}
          {gridView &&
            currentPost?.map((product) => {
              return <Card key={product._id} product={product} />;
            })}
        </div>
        <div>
          {!gridView &&
            currentPost?.map((product) => {
              return <CardDescription key={product._id} product={product} />;
            })}
        </div>
        <Pagination
          pages={pages}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
          handleNextPageClick={handleNextPageClick}
          handlePreviousPageClick={handlePreviousPageClick}
        />
      </div>
    </section>
  );
};

export default Shop;
