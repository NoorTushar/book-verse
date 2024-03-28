import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Banner = () => {
   const navigate = useNavigate();
   const handleViewList = () => {
      navigate("/listedBooks");
   };
   return (
      <div className="hero min-h-[554px]  bg-[#F3F3F3] rounded-2xl mt-2">
         <div className=" hero-content flex-col lg:flex-row-reverse lg:px-28 py-14">
            <div>
               <img
                  alt="The-Alchemist"
                  src="https://i.ibb.co/YT9pWBR/The-Alchemist.png"
                  className=" max-w-[318px] w-[200px] md:w-auto rounded-lg  bg-transparent"
               />
            </div>
            <div className="text-center lg:text-start">
               <h1 className="text-3xl md:text-5xl font-bold mb-8">
                  Books to freshen up your bookshelf
               </h1>

               <button
                  className="btn md:btn-lg font-bold rounded-xl bg-our-primary text-white hover:bg-green-600"
                  onClick={handleViewList}
               >
                  View The List
               </button>
            </div>
         </div>
      </div>
   );
};
export default Banner;
