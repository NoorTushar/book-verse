import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ListedBooksPage from "../Pages/ListedBooksPage";
import PagesToReadPage from "../Pages/PagesToReadPage";
import SingleBookPage from "../Pages/SingleBookPage";
import ErrorPage from "../Pages/ErrorPage";
import ReadBooks from "../components/ReadBooks";
import WishlistBooks from "../components/WishlistBooks";
import { getReadBooks } from "../Utils/localStorageReadBooks";
import { getWishlist } from "../Utils/localStorageWishList";
import BlogsPage from "../Pages/BlogsPage";
import SingleBlogPage from "../Pages/SingleBlogPage";
import AuthorsPage from "../Pages/AuthorsPage";
import SingleAuthorPage from "../Pages/SingleAuthorPage";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            index: true,
            element: <Home></Home>,
            loader: () => {
               return fetch("/Books.json");
            },
         },
         {
            path: "/listedBooks",
            element: <ListedBooksPage></ListedBooksPage>,
            children: [
               {
                  index: true,
                  element: <ReadBooks></ReadBooks>,
                  loader: () => {
                     return getReadBooks();
                  },
               },
               {
                  path: "wishlist",
                  element: <WishlistBooks></WishlistBooks>,
                  loader: () => {
                     return getWishlist();
                  },
               },
            ],
         },
         {
            path: "/pagesToRead",
            element: <PagesToReadPage></PagesToReadPage>,
            loader: () => {
               return getReadBooks();
            },
         },
         {
            path: "/book/:id",
            element: <SingleBookPage></SingleBookPage>,
            loader: () => {
               return fetch("/Books.json");
            },
         },

         {
            path: "/blogs",
            element: <BlogsPage></BlogsPage>,
            loader: () => {
               return fetch("/Blogs.json");
            },
         },
         {
            path: "/blog/:blogId",
            element: <SingleBlogPage></SingleBlogPage>,
            loader: () => {
               return fetch("/Blogs.json");
            },
         },
         {
            path: "/authors",
            element: <AuthorsPage></AuthorsPage>,
            loader: () => {
               return fetch("/Authors.json");
            },
         },
         {
            path: "/author/:authorId",
            element: <SingleAuthorPage></SingleAuthorPage>,
            loader: () => {
               return fetch("/Authors.json");
            },
         },
      ],
   },
]);
