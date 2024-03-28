import React from "react";

const AuthorCard = ({ author }) => {
   const { author_name, author_image } = author;
   return (
      <div className="flex flex-col p-6  text-black border rounded-xl gap-6 shadow-sm">
         <img
            src={author_image}
            alt={author_name}
            className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96  aspect-square"
         />

         <h2 className="text-xl font-semibold text-center">{author_name}</h2>
      </div>
   );
};

export default AuthorCard;
