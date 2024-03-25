import React from "react";

const Banner = () => {
   return (
      <div className="hero min-h-[554px]  bg-[#F3F3F3] rounded-2xl mt-2">
         <div className=" hero-content flex-col lg:flex-row-reverse lg:px-28 py-14">
            <div>
               <img
                  src="https://i.ibb.co/pn7TcH0/The-Vinci-Code.png
"
                  className=" max-w-[318px] rounded-lg  bg-transparent"
               />
            </div>
            <div className="space-y-8 text-center lg:text-start">
               <h1 className="text-4xl md:text-5xl font-bold">
                  Books to freshen up your bookshelf
               </h1>
               <button className="btn-lg font-bold rounded-xl bg-our-primary text-white">
                  View The List
               </button>
            </div>
         </div>
      </div>
   );
};
export default Banner;
