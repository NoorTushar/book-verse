import React from "react";
import Banner from "../components/Banner";
import BooksListContainer from "../components/BooksListContainer";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <BooksListContainer></BooksListContainer>
      </div>
   );
};

export default Home;
