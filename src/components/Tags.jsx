import React from "react";

const Tags = ({ tag }) => {
   return (
      <div className="bg-[#F5FCF3] text-our-primary text-base font-medium py-2 px-4 rounded-full">
         <p>{tag}</p>
      </div>
   );
};

export default Tags;
