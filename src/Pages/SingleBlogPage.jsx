import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleBlogPage = () => {
   const { blogId: id } = useParams();

   const intId = parseInt(id);
   const blogs = useLoaderData();

   const singleBlog = blogs.find((blog) => blog.blogId === intId);

   const { blogId, title, content, date } = singleBlog;
   return (
      <div>
         <h3>{title}</h3>
      </div>
   );
};

export default SingleBlogPage;
