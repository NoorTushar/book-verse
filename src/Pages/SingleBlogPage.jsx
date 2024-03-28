import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleBlogPage = () => {
   const { blogId: id } = useParams();

   const intId = parseInt(id);
   const blogs = useLoaderData();

   const singleBlog = blogs.find((blog) => blog.blogId === intId);

   const { blogId, cover_pic, title, content, date, category, tags } =
      singleBlog;
   return (
      <div className=" group text-black my-10">
         <img
            alt={title}
            className="max-w-xl mx-auto object-cover w-full rounded bg-gray-500"
            src={cover_pic}
         />
         <div className="p-6 px-0 space-y-4">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <div className="flex gap-4">
               <span className="text-xs text-gray-400">{date}</span>
               <span className="text-xs text-gray-400">
                  Category: {category}
               </span>
            </div>
            <div className="flex gap-3">
               {tags.map((tag, idx) => (
                  <span key={idx} className="text-xs text-gray-400">
                     #{tag}
                  </span>
               ))}
            </div>
            <p>{content}</p>
         </div>
      </div>
   );
};

export default SingleBlogPage;
