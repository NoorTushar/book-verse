import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
   return (
      <div className="navbar bg-base-100 px-0 py-4 lg:py-8 ">
         <div className="navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden pl-0"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2 "
               >
                  <li>
                     <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                     <NavLink to={"/listedBooks"}>Listed Books</NavLink>
                  </li>
                  <li>
                     <NavLink to={"/pagesToRead"}>Pages to Read</NavLink>
                  </li>
                  <li>
                     <NavLink to={"/authors"}>Spotlight</NavLink>
                  </li>
                  <li>
                     <NavLink to={"/blogs"}>Blogs</NavLink>
                  </li>
               </ul>
            </div>
            <Link to={`/`} className="text-xl md:text-3xl font-bold">
               Book<span className="text-our-primary">Verse</span>
            </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="our-menu menu-horizontal px-1 space-x-1">
               <li>
                  <NavLink to={"/"}>Home</NavLink>
               </li>
               <li>
                  <NavLink to={"/listedBooks"}>Listed Books</NavLink>
               </li>
               <li>
                  <NavLink to={"/pagesToRead"}>Pages to Read</NavLink>
               </li>
               <li>
                  <NavLink to={"/authors"}>Spotlight</NavLink>
               </li>
               <li>
                  <NavLink to={"/blogs"}>Blogs</NavLink>
               </li>
            </ul>
         </div>
         <div className="navbar-end space-x-2 ">
            <button className="btn bg-our-primary text-white hover:bg-green-600">
               Sign In
            </button>
            <button className="btn bg-our-cyan text-white hover:bg-cyan-600">
               Sign Up
            </button>
         </div>
      </div>
   );
};

export default NavBar;
