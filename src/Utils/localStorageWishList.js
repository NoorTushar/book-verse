import { toast } from "react-toastify";
import { getReadBooks } from "./localStorageReadBooks";

export const getWishlist = () => {
   let wishlists = [];
   const storedWishlist = localStorage.getItem("wishlist");

   if (storedWishlist) {
      wishlists = JSON.parse(storedWishlist);
   }

   return wishlists;
};

// save

export const saveWishlist = (wishlist) => {
   let wishlists = getWishlist();
   let readBooks = getReadBooks();
   const existInReadBook = readBooks.find((b) => b.bookId === wishlist.bookId);

   if (existInReadBook) {
      return toast.error("You have already read this book.");
   }
   const isExist = wishlists.find((b) => b.bookId === wishlist.bookId);

   if (isExist) {
      return toast.error("Already added to your wishlist.");
   }

   wishlists.push(wishlist);
   localStorage.setItem("wishlist", JSON.stringify(wishlists));
   toast.success("Added to your wishlist.");
};
