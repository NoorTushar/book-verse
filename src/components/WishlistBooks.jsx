import React from "react";
import ReadBook from "./ReadBook";
import { useLoaderData } from "react-router-dom";

const WishlistBooks = () => {
   const wishlistBooks = useLoaderData();

   return (
      <div className="space-y-6 my-10">
         {wishlistBooks.map((book) => (
            <ReadBook book={book}></ReadBook>
         ))}
      </div>
   );
};

export default WishlistBooks;
