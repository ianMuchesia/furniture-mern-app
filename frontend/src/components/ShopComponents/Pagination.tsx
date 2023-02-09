import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface Props {
  pages: number[];
  currentPage: number;
  handlePreviousPageClick: () => void;
  handleNextPageClick:()=>void;
  handlePageClick: (page: number) => void;
}
const paginationStyles = {
  previousButton: `inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md`,
  style_1: `inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md`,
};

const Pagination = ({
  pages,
  currentPage,
 handlePreviousPageClick,
 handleNextPageClick,
  handlePageClick,
}: Props) => {
  return (
    <div className="flex justify-center space-x-1 dark:text-gray-100 mt-10">
      <button
        title="previous"
        type="button"
        className={paginationStyles.previousButton}
        onClick={handlePreviousPageClick}
      >
        <BsChevronLeft className="w-4" />
      </button>
      {pages.map((item, index) => (
        <button
          type="button"
          onClick={() => handlePageClick(item)}
          key={index}
          className={`${paginationStyles.style_1} ${currentPage === item? "bg-purple-400":""}`}
        >
          {item}
        </button>
      ))}
      <button
        title="next"
        type="button"
        className={paginationStyles.previousButton}
        onClick={handleNextPageClick}
      >
        <BsChevronRight className="w-4" />
      </button>
    </div>
  );
};

export default Pagination;
