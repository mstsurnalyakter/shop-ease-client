import { Link, useParams } from "react-router-dom";
import banner from "../../../public/banner/banner6.jpg";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";
import Spinner from "../../components/Spinner";
import Card from "../../components/Card";

const CategoryProducts = () => {
  const {categoryName}= useParams();
   const { data, isLoading, refetch, isError, error } = useQuery({
     queryKey: ["job"],
     queryFn: async () => {
       const { data } = await axios.get(
         `${
           import.meta.env.VITE_API_URL
         }/products?page=${currentPage}&size=${itemPerPage}&search=${search}`
       );
       return data;
     },
   });


  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-10">
        <Spinner />
      </div>
    );
  }


  return (
    <div>
      <header>
        <div
          className="w-full   object-cover bg-cover h-[140px]"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                Find Product
              </h1>

              <form onSubmit={handleSearch} className="relative mt-4">
                <input
                  type="text"
                  name="search"
                  placeholder="Search here"
                  className="py-3 outline-none w-full pl-3 rounded"
                  id="search"
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                />
                <button
                  type="submit"
                  className="!absolute bg-[#07BE65] text-white px-3 py-2 right-1 top-1 rounded"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <div className="grid mt-16 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products?.length > 0 &&
          products?.map((product) => (
            <Card product={product} key={product?._id} />
          ))}
      </div>

      {/* pagination section */}

      <div className="flex justify-center mt-16">
        {/* previous button */}
        <button
          onClick={() => handlePaginationButton(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 text-gray-700 dark:text-gray-900 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#07BE65]  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {/* numbers */}
        {pages?.map((btnNum) => (
          <button
            key={btnNum}
            onClick={() => handlePaginationButton(btnNum)}
            className={`hidden ${
              currentPage === btnNum ? "bg-[#07BE65] text-white " : ""
            } px-4 py-2 mx-1 transition-colors duration-300 dark:text-gray-100 transform  rounded-md sm:inline hover:bg-[#07BE65]  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        {/* next button */}
        <button
          onClick={() => handlePaginationButton(currentPage + 1)}
          disabled={currentPage === numberOfPages}
          className="px-4 py-2 mx-1 text-gray-700 dark:text-gray-900 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-[#07BE65] disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CategoryProducts;
