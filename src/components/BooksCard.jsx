import React from "react";
import Tags from "./Tags";
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BooksCard = ({ book }) => {
   const { bookId, name, image, tags, author, category, rating } = book;
   return (
      <Link to={`/book/${bookId}`} className="card border-2 cursor-pointer">
         <figure className="mt-6 px-6 py-6 rounded-xl mx-auto bg-[#F3F3F3]">
            <img
               src={image}
               alt="Shoes"
               className="rounded-xl max-w-[180px] sm:max-w-[250px] md:max-w-[200px] lg:max-w-auto"
            />
            {/*  */}
         </figure>
         <div className="card-body items-center lg:items-start md:text-start text-center">
            <div className="flex gap-1 md:gap-3 flex-wrap">
               {tags.map((tag, idx) => (
                  <Tags key={idx} tag={tag}></Tags>
               ))}
            </div>
            <h2 className="card-title text-2xl my-1 md:my-3">{name}</h2>
            <p className="text-base opacity-80 font-medium">by: {author}</p>

            <div className="divider my-1 md:my-3"></div>

            <div className="w-full text-base opacity-80 font-medium flex justify-between">
               <div>
                  <p>{category}</p>
               </div>
               <div className="flex items-center gap-2">
                  <p>{Number(rating).toFixed(1)}</p>
                  <FaRegStar className="font-bold text-lg"></FaRegStar>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default BooksCard;
