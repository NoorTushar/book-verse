import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const PagesToReadPage = () => {
   const books = useLoaderData();
   if (books.length === 0) {
      return (
         <h1 className="text-2xl lg:text-3xl rounded-lg py-5 font-bold text-center bg-[#F3F3F3]">
            No Read Books
         </h1>
      );
   }

   const { name, totalPages } = books;
   const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

   const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${
         x + width / 2
      },${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
         y + height
      } ${x + width}, ${y + height}
      Z`;
   };

   const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;

      return (
         <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
      );
   };

   return (
      <div className="min-h-[calc(100vh-84px)] flex items-center justify-center">
         <BarChart
            className="-mt-7"
            width={books.length > 2 ? 1000 : 600}
            height={400}
            data={books}
            margin={{
               top: 20,
               right: 30,
               left: 20,
               bottom: 5,
            }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="totalPages" />
            <Bar
               dataKey="totalPages"
               fill="#8884d8"
               shape={<TriangleBar></TriangleBar>}
               label={{ position: "top" }}
            >
               {books.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
               ))}
            </Bar>
         </BarChart>
      </div>
   );
};

export default PagesToReadPage;
