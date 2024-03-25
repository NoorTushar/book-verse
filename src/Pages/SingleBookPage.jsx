import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleBookPage = () => {
   const { id } = useParams();
   const intId = parseInt(id);
   const books = useLoaderData();
   // const [singleBook, setSingleBook] = useState({});

   const singleBook = books.find((book) => book.bookId === intId);
   const {
      bookId,
      name,
      author,
      image,
      review,
      totalPages,
      rating,
      category,
      tags,
      publisher,
      yearOfPublishing,
   } = singleBook;
   return (
      <div>
         <h3>{name}</h3>
      </div>
   );
};

export default SingleBookPage;
