import React from "react";

const BlogCard = () => {
   return (
      <div className="max-w-sm mx-auto group text-black">
         <img
            role="presentation"
            className="object-cover w-full rounded h-44 bg-gray-500"
            src="https://source.unsplash.com/random/480x360?1"
         />
         <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold">
               In usu laoreet repudiare legendos
            </h3>
            <span className="text-xs text-gray-400">January 21, 2021</span>
            <p>
               Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
               neglegentur, ex has tantas percipit perfecto. At per tempor
               albucius perfecto, ei probatus consulatu patrioque mea, ei vocent
               delicata indoctum pri.
            </p>
         </div>
      </div>
   );
};

export default BlogCard;
