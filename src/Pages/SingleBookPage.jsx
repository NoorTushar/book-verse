import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getReadBooks, saveReadBooks } from "../Utils/localStorageReadBooks";
import { saveWishlist } from "../Utils/localStorageWishList";

const SingleBookPage = () => {
   const { id } = useParams();
   const intId = parseInt(id);
   const books = useLoaderData();

   const singleBook = books.find((book) => book.bookId === intId);
   const {
      bookId,
      name,
      author,
      image,
      review,
      totalPages,
      rating,
      category,
      tags,
      publisher,
      yearOfPublishing,
   } = singleBook;

   return (
      <div className="space-y-8 lg:space-y-0 lg:flex lg:gap-12 mt-6 lg:mt-10 mb-24">
         {/* cover pic */}
         <div className="bg-[#F3F3F3] rounded-xl flex items-center justify-center lg:basis-1/2 shadow-lg flex-shrink">
            <img
               className="md:w-full w-[220px] p-6 lg:py-0 lg:px-6 max-w-[405px] flex-shrink py-14"
               src={image}
               alt=""
            />
         </div>

         <div className="lg:basis-1/2">
            <h1
               style={{ lineHeight: "46px" }}
               className="text-3xl md:text-[40px] font-bold "
            >
               {name}
            </h1>
            <Link
               to={`/author/${bookId}`}
               className="text-[20px] font-medium mt-2 underline"
            >
               by: {author}
            </Link>

            <div className="divider"></div>
            <p className="text-[20px] font-medium">{category}</p>
            <div className="divider"></div>

            <p className="">
               <span className="font-bold">Review: </span>{" "}
               <span className="opacity-70">{review}</span>
            </p>

            {/* tags */}
            <div className="flex items-center gap-3 mt-4">
               <p className="font-bold">Tags </p>
               <div className="flex gap-3 flex-wrap">
                  {tags.map((tag, idx) => (
                     <div
                        key={idx}
                        className="bg-[#F5FCF3] text-our-primary text-base font-medium py-2 px-4 rounded-full"
                     >
                        <p>#{tag}</p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="divider"></div>

            <div className="overflow-x-auto">
               <table className="table table-pin-rows table-pin-cols ">
                  <tbody className="*:border-none *:outline-none ">
                     <tr className="*:pl-0">
                        <td>Number of Pages:</td>
                        <td className="font-bold">{totalPages}</td>
                     </tr>
                     <tr className="*:pl-0">
                        <td>Publisher:</td>
                        <td className="font-bold">{publisher}</td>
                     </tr>
                     <tr className="*:pl-0">
                        <td>Year of Publishing:</td>
                        <td className="font-bold">{yearOfPublishing}</td>
                     </tr>
                     <tr className="*:pl-0">
                        <td>Rating:</td>
                        <td className="font-bold">{rating}</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            {/* buttons */}
            <div className="flex items-center gap-3 mt-6">
               <button
                  className="btn bg-transparent text-black border-black"
                  onClick={() => {
                     saveReadBooks(singleBook);
                  }}
               >
                  Read
               </button>
               <button
                  className="btn bg-our-cyan text-white hover:bg-cyan-600"
                  onClick={() => saveWishlist(singleBook)}
               >
                  Wishlist
               </button>
            </div>
         </div>
         <ToastContainer></ToastContainer>
      </div>
   );
};

export default SingleBookPage;
