import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
   const { blogId, title, content, date } = blog;
   return (
      <div className="max-w-sm mx-auto group text-black">
         <img
            role="presentation"
            className="object-cover w-full rounded h-44 bg-gray-500"
            src="https://source.unsplash.com/random/480x360?1"
         />
         <div className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <span className="text-xs text-gray-400">{date}</span>
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
