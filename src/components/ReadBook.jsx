import React from "react";
import { SlCalender } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegFileAlt, FaRegStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const ReadBook = ({ book }) => {
   const navigate = useNavigate();
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
   } = book;

   const handleViewDetails = (bookId) => {
      navigate(`/book/${bookId}`);
   };
   return (
      <div className="border p-6 md:p-10 lg:p-6 rounded-xl flex flex-col lg:flex-row gap-6 items-center lg:items-start">
         <div className="size-[230px] lg:size-[300px] flex items-center justify-center bg-[#f3f3f3] rounded-2xl flex-shrink-0 w-full md:w-[70%]">
            <img className="w-[130px] lg:w-[170px]" src={image} alt={name} />
         </div>

         <div className="space-y-3">
            <h2 style={{ lineHeight: "46px" }} className="text-2xl  font-bold">
               {name}
            </h2>
            <Link to={`/author/${bookId}`} className="text-[20px] underline">
               by: {author}
            </Link>
            {/* tags & year */}
            <div className="flex items-center gap-3 flex-wrap">
               <p className="font-bold">Tags </p>
               <div className="flex gap-4 flex-wrap items-center">
                  {tags.map((tag, idx) => (
                     <div
                        key={idx}
                        className="bg-[#F5FCF3] text-our-primary text-base font-medium py-2 px-4 rounded-full"
                     >
                        <p>#{tag}</p>
                     </div>
                  ))}
                  <div className="flex gap-2 items-center">
                     <SlCalender className="text-lg"></SlCalender>
                     <p>
                        <span className="font-bold">Published Year: </span>{" "}
                        {yearOfPublishing}
                     </p>
                  </div>
               </div>
            </div>

            {/* publisher & page */}
            <div className="flex gap-4 items-center flex-wrap py-2">
               <div className="flex gap-2 items-center">
                  <IoPersonOutline className="text-lg"></IoPersonOutline>
                  <p>
                     <span className="font-bold">Publisher: </span>
                     {publisher}
                  </p>
               </div>
               <div className="flex gap-2 items-center">
                  <FaRegFileAlt className="text-lg"></FaRegFileAlt>
                  <p>
                     <span className="font-bold">Pages: </span>
                     {totalPages}
                  </p>
               </div>
               <div className="flex gap-2 items-center">
                  <FaRegStar className="text-lg"></FaRegStar>
                  <p>
                     <span className="font-bold">Rating: </span>
                     {rating}
                  </p>
               </div>
            </div>

            <div className="divider"></div>

            <div className="flex items-center gap-3 flex-wrap">
               <div className="bg-[#DFEDFF] text-blue-500 text-base font-medium py-2 md:py-3 px-5 md:px-6 rounded-full">
                  <p>Category: {category}</p>
               </div>

               <div className="bg-[#FFF4E0] text-yellow-600 text-base font-medium py-2 md:py-3 px-5 md:px-6 rounded-full">
                  <p>Category: {category}</p>
               </div>

               <div>
                  <button
                     className=" text-base font-medium bg-our-primary text-white py-2 md:py-3 px-5 md:px-6 rounded-full"
                     onClick={() => handleViewDetails(bookId)}
                  >
                     View Details
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ReadBook;
