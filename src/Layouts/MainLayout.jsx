import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar";

const MainLayout = () => {
   return (
      <div className="max-w-[1170px] mx-auto w-[90%] md:w-[82%]">
         <NavBar></NavBar>
         <Outlet></Outlet>
      </div>
   );
};

export default MainLayout;
