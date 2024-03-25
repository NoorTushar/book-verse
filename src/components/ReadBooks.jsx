import React from "react";
import { getReadBooks } from "../Utils/localStorageReadBooks";
import { useLoaderData } from "react-router-dom";
import ReadBook from "./ReadBook";

const ReadBooks = () => {
   const readBooks = useLoaderData();
   console.log(readBooks);

   return (
      <div className="space-y-6">
         {readBooks.map((readBook) => (
            <ReadBook readBook={readBook}></ReadBook>
         ))}
      </div>
   );
};

export default ReadBooks;
