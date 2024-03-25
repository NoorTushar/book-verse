import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ListedBooksPage from "../Pages/ListedBooksPage";
import PagesToReadPage from "../Pages/PagesToReadPage";
import SingleBookPage from "../Pages/SingleBookPage";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => {
               return fetch("../../public/Books.json");
            },
         },
         {
            path: "/listedBooks",
            element: <ListedBooksPage></ListedBooksPage>,
         },
         {
            path: "/pagesToRead",
            element: <PagesToReadPage></PagesToReadPage>,
         },
         {
            path: "/book/:id",
            element: <SingleBookPage></SingleBookPage>,
            loader: () => {
               return fetch("../../public/Books.json");
            },
         },
      ],
   },
]);
