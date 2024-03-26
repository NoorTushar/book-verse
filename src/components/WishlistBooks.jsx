import React, { useContext, useEffect, useState } from "react";
import ReadBook from "./ReadBook";
import { useLoaderData } from "react-router-dom";
import { FilterOptionContext } from "../Pages/ListedBooksPage";

const WishlistBooks = () => {
   const wishlistBooks = useLoaderData();
   const filterOption = useContext(FilterOptionContext);

   const [filteredBooks, setFilteredBooks] = useState(wishlistBooks);

   useEffect(() => {
      if (filterOption === "none") {
         setFilteredBooks(wishlistBooks);
      } else if (filterOption === "rating") {
         const filter = [...wishlistBooks].sort((a, b) => b.rating - a.rating);

         setFilteredBooks(filter);
      } else if (filterOption === "pages") {
         const filter = [...wishlistBooks].sort(
            (a, b) => b.totalPages - a.totalPages
         );

         setFilteredBooks(filter);
      } else if (filterOption === "year") {
         const filter = [...wishlistBooks].sort(
            (a, b) => b.yearOfPublishing - a.yearOfPublishing
         );

         setFilteredBooks(filter);
      }
   }, [filterOption]);
   return (
      <div className="space-y-6 my-10">
         {filteredBooks.map((book) => (
            <ReadBook key={book.bookId} book={book}></ReadBook>
         ))}
      </div>
   );
};

export default WishlistBooks;
