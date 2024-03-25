import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBookPage = () => {
   const { id } = useParams();
   const intId = parseInt(id);
   const [books, setBooks] = useState([]);
   // const [singleBook, setSingleBook] = useState({});

   useEffect(() => {
      fetch("/Books.json")
         .then((res) => res.json())
         .then((data) => setBooks(data));
   }, []);

   const singleBook = books.find((book) => book.bookId === intId);

   return (
      <div>
         <h3>{singleBook.bookName}</h3>
      </div>
   );
};

export default SingleBookPage;
