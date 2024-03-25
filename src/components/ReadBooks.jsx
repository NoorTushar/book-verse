import React from "react";
import { getReadBooks } from "../Utils/localStorageReadBooks";
import { useLoaderData } from "react-router-dom";

const ReadBooks = ({ numberr }) => {
   const readBooks = useLoaderData();

   console.log(readBooks);

   return (
      <div>
         {readBooks.map((readBook) => (
            <h1>read Book</h1>
         ))}
      </div>
   );
};

export default ReadBooks;
