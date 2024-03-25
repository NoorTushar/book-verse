import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Outlet } from "react-router-dom";

const ListedBooksPage = () => {
   const numberr = 2;

   return (
      <div>
         <h1 className="text-2xl lg:text-3xl rounded-lg py-5 font-bold text-center bg-[#F3F3F3]">
            Your Listed Books
         </h1>
         {/* sort by button */}
         <div className="text-center mt-8">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 bg-our-primary text-white"
               >
                  Sort By<IoIosArrowDown></IoIosArrowDown>
               </div>
               <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-4 shadow rounded-box min-w-52 bg-white text-start text-base *:cursor-pointer space-y-2"
               >
                  <li>Rating</li>
                  <li>Number of pages</li>
                  <li>Published year</li>
               </ul>
            </div>
         </div>

         <Outlet></Outlet>
      </div>
   );
};

export default ListedBooksPage;
