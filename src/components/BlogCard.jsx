import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
   const { blogId, cover_pic, title, content, date, category } = blog;
   return (
      <div className="max-w-sm mx-auto group text-black rounded-lg border ">
         <img
            role="presentation"
            className="object-cover w-full rounded h-44 bg-gray-500"
            src={cover_pic}
         />
         <div className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <span className="text-xs text-gray-400">{date}</span>
            <span className="ml-4 text-xs text-gray-400">{category}</span>

            <p>{content.slice(0, 170)} ...</p>
            <div>
               <Link to={`/blog/${blogId}`}>
                  <button className="btn bg-our-primary text-white hover:bg-green-600">
                     Read More
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default BlogCard;
