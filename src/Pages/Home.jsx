import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import BooksListContainer from "../components/BooksListContainer";
import { useLoaderData } from "react-router-dom";

const Home = () => {
   const books = useLoaderData();
   return (
      <div>
         <Banner></Banner>
         <BooksListContainer books={books}></BooksListContainer>
      </div>
   );
};

export default Home;
