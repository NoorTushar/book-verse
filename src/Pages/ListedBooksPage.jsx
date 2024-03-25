import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Outlet } from "react-router-dom";

const ListedBooksPage = () => {
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
                  className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52"
               >
                  <li>
                     <a>Item 1</a>
                  </li>
                  <li>
                     <a>Item 2</a>
                  </li>
               </ul>
            </div>
         </div>

         <Outlet></Outlet>
      </div>
   );
};

export default ListedBooksPage;
