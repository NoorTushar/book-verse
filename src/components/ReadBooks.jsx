import React from "react";
import { getReadBooks } from "../Utils/localStorageReadBooks";
import { useLoaderData } from "react-router-dom";
import ReadBook from "./ReadBook";

const ReadBooks = () => {
   const readBooks = useLoaderData();

   return (
      <div className="space-y-6 my-10">
         {readBooks.map((book) => (
            <ReadBook book={book}></ReadBook>
         ))}
      </div>
   );
};

export default ReadBooks;
