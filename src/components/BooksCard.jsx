import React from "react";
import Tags from "./Tags";
import { FaRegStar } from "react-icons/fa6";

const BooksCard = ({ book }) => {
   const { id, bookName, image, tags, author } = book;
   return (
      <div className="card border-2">
         <figure className="mt-6 px-6 py-6 rounded-xl mx-auto bg-[#F3F3F3]">
            <img
               src={image}
               alt="Shoes"
               className="rounded-xl max-w-[200px] sm:max-w-[250px] md:max-w-[200px] lg:max-w-auto"
            />
            {/*  */}
         </figure>
         <div className="card-body items-center lg:items-start md:text-start text-center">
            <div className="flex gap-3 flex-wrap">
               {tags.map((tag) => (
                  <Tags tag={tag}></Tags>
               ))}
            </div>
            <h2 className="card-title text-2xl my-3">{bookName}</h2>
            <p className="text-base opacity-80 font-medium">by: {author}</p>

            <div className="divider"></div>

            <div className="w-full text-base opacity-80 font-medium flex justify-between">
               <div>
                  <p>Fiction</p>
               </div>
               <div className="flex items-center gap-2">
                  <p>5.00 </p>
                  <FaRegStar className="font-bold text-lg"></FaRegStar>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BooksCard;
