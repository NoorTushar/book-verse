import { toast } from "react-toastify";

export const getReadBooks = () => {
   let readBooks = [];
   const storedReadBooks = localStorage.getItem("readBooks");

   if (storedReadBooks) {
      readBooks = JSON.parse(storedReadBooks);
   }

   return readBooks;
};

// save

export const saveReadBooks = (readBook) => {
   let readBooks = getReadBooks();

   const isExist = readBooks.find((b) => b.bookId === readBook.bookId);

   if (isExist) {
      return toast.error("Already read this book");
   }

   readBooks.push(readBook);
   localStorage.setItem("readBooks", JSON.stringify(readBooks));
   toast.success("Book Read Completed");
};
