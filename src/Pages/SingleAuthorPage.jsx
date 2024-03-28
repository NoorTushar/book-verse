import { useLoaderData, useParams } from "react-router-dom";

const SingleAuthorPage = () => {
   const authors = useLoaderData();
   const { authorId: id } = useParams();
   const intId = parseInt(id);
   const singleAuthor = authors.find((author) => author.author_id === intId);

   const {
      author_id,
      author_name,
      author_image,
      date_of_birth,
      education,
      biography,
      bibliography,
   } = singleAuthor;
   return (
      <div className="flex flex-col p-6  text-black border rounded-xl gap-6 shadow-sm cursor-pointer my-10">
         <img
            src={author_image}
            alt={author_name}
            className="flex-shrink-0 object-cover h-64 rounded-xl sm:h-96  aspect-square"
         />
         <h2 className="text-2xl font-semibold">{author_name}</h2>
         <p>
            {" "}
            <span className="font-bold">Birthday: </span>
            {date_of_birth}
         </p>
         <p>
            <span className="font-bold">Education: </span>
            {education}
         </p>
         <p>{biography}</p>
         <p>
            <span className="font-bold underline">Famous Writings:</span>
            <ul>
               {bibliography.map((item, idx) => (
                  <li key={author_id}>
                     {idx + 1}. {item}
                  </li>
               ))}
            </ul>
         </p>
      </div>
   );
};

export default SingleAuthorPage;
