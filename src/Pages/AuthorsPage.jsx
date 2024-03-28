import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AuthorCard from "../components/AuthorCard";

const AuthorsPage = () => {
   const authors = useLoaderData();

   return (
      <div>
         <h1 className="text-2xl lg:text-3xl rounded-lg py-5 font-bold text-center bg-[#F3F3F3] mt-6">
            Author's Spotlight
         </h1>

         <div className="grid lg:grid-cols-2 gap-6 md:grid-cols-1 justify-center my-10">
            {authors.map((author) => (
               <AuthorCard key={author.authorId} author={author}></AuthorCard>
            ))}
         </div>
      </div>
   );
};

export default AuthorsPage;
