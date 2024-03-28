import React from "react";
import BooksCard from "./BooksCard";

const BooksListContainer = ({ books }) => {
   return (
      <div className="my-[40px] md:my-[100px]  font-bold text-center">
         <h3 className="text-3xl md:text-4xl mb-[36px] md:mb-[60px]">Books</h3>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
               <BooksCard key={book.bookId} book={book}></BooksCard>
            ))}
         </div>
      </div>
   );
};

export default BooksListContainer;
