import { toast } from "react-toastify";

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

   const isExist = wishlists.find((b) => b.bookId === wishlist.bookId);

   if (isExist) {
      return toast.error("Already added to your wishlist.");
   }

   wishlists.push(wishlist);
   localStorage.setItem("wishlist", JSON.stringify(wishlists));
   toast.success("Added to your wishlist.");
};
