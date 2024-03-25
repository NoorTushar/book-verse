import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import BooksListContainer from "../components/BooksListContainer";

const Home = () => {
   const [books, setBooks] = useState([]);

   useEffect(() => {
      fetch("Books.json")
         .then((res) => res.json())
         .then((data) => setBooks(data));
   }, []);

   return (
      <div>
         <Banner></Banner>
         <BooksListContainer books={books}></BooksListContainer>
      </div>
   );
};

export default Home;
