import React, { useContext, useEffect, useState } from "react";
import { getReadBooks } from "../Utils/localStorageReadBooks";
import { useLoaderData } from "react-router-dom";
import ReadBook from "./ReadBook";
import { FilterOptionContext } from "../Pages/ListedBooksPage";

const ReadBooks = () => {
   const readBooks = useLoaderData();
   const filterOption = useContext(FilterOptionContext);

   const [filteredBooks, setFilteredBooks] = useState(readBooks);

   useEffect(() => {
      if (filterOption === "none") {
         setFilteredBooks(readBooks);
      } else if (filterOption === "rating") {
         const filter = [...readBooks].sort((a, b) => b.rating - a.rating);

         setFilteredBooks(filter);
      } else if (filterOption === "pages") {
         const filter = [...readBooks].sort(
            (a, b) => b.totalPages - a.totalPages
         );

         setFilteredBooks(filter);
      } else if (filterOption === "year") {
         const filter = [...readBooks].sort(
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

export default ReadBooks;
