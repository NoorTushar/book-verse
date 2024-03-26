import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

const ListedBooksPage = () => {
   const [tabIndex, setTabIndex] = useState(0);

   useEffect(() => {
      const localIndex = JSON.parse(localStorage.getItem("tabIndex"));
      if (localIndex !== null) {
         setTabIndex(localIndex);
      }
   }, []);

   const handleTabIndex = (index) => {
      setTabIndex(index);
      localStorage.setItem("tabIndex", JSON.stringify(index)); // Store the updated index
   };

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
         {/* Tabs */}
         <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start pl-5 flex-nowrap dark:text-gray-800">
            <Link
               onClick={() => handleTabIndex(0)}
               to={`/listedBooks`}
               className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-600 ${
                  tabIndex == 0 ? "border border-b-0 rounded-t-lg" : "border-b"
               }`}
            >
               <span>Listed Books</span>
            </Link>
            <Link
               onClick={() => handleTabIndex(1)}
               to={`/listedBooks/wishlist`}
               className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-900 ${
                  tabIndex == 1 ? "border border-b-0 rounded-t-lg" : "border-b"
               }`}
            >
               <span>Wishlist Books</span>
            </Link>
         </div>

         <Outlet></Outlet>
      </div>
   );
};

export default ListedBooksPage;
