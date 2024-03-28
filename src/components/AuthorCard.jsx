import React from "react";
import { Link } from "react-router-dom";

const AuthorCard = ({ author }) => {
   const { author_id, author_name, author_image } = author;

   return (
      <Link
         to={`/author/${author_id}`}
         className="flex flex-col p-6  text-black border rounded-xl gap-6 shadow-sm cursor-pointer"
      >
         <img
            src={author_image}
            alt={author_name}
            className="flex-shrink-0 object-cover h-64 rounded-xl sm:h-96  aspect-square"
         />

         <h2 className="text-xl font-semibold text-center">{author_name}</h2>
      </Link>
   );
};

export default AuthorCard;
