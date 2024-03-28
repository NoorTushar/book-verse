import { Link, useLoaderData } from "react-router-dom";
import BlogCard from "../components/BlogCard";

const BlogsPage = () => {
   const blogs = useLoaderData();

   return (
      <div>
         <h1 className="text-2xl lg:text-3xl rounded-lg py-5 font-bold text-center bg-[#F3F3F3] mt-6">
            Blogs
         </h1>

         {/* Blogs Container */}
         <section className=" text-gray-100 my-6">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 px-0">
               <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group lg:grid lg:grid-cols-12 text-black rounded-lg border">
                  <img
                     src={blogs[0].cover_pic}
                     alt=""
                     className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500 "
                  />
                  <div className="p-6 space-y-4 lg:col-span-5">
                     <h3 className="text-2xl font-semibold sm:text-4xl ">
                        {blogs[0].title}
                     </h3>
                     <span
                        className="text-xs text-black
                     "
                     >
                        {blogs[0].date}
                     </span>
                     <span className="ml-4 text-xs text-gray-400">
                        {blogs[0].category}
                     </span>
                     <p>{blogs[0].content.slice(0, 170)} ...</p>
                     <div>
                        <Link to={`/blog/${blogs[0].blogId}`}>
                           <button className="btn bg-our-primary text-white hover:bg-green-600">
                              Read More
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* each blog card */}

                  {blogs.slice(1, blogs.length).map((blog) => {
                     return <BlogCard key={blog.blogId} blog={blog}></BlogCard>;
                  })}
               </div>
            </div>
         </section>
      </div>
   );
};

export default BlogsPage;
