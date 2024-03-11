import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/organisms/navber/Navbar";
import Breadcrumb from "./components/molecules/bredcumb/Breadcrumb";
import SidebarMenu from "./components/molecules/sidebar-menu/SidebarMenu";

const App = () => {
  return (
    <div className=" h-[1139px] ">
      <div className="bg-midnight  ">
        <div className="mx-auto  max-w-[1440px] px-2 lg:px-14 ">
          <div className="h-[267px] ">
            <Navbar />
            {/* <Breadcrumb /> */}
          </div>
        </div>
      </div>
      {/* 
      <div className=" mx-auto -mt-12  max-w-[1440px] px-2 lg:px-14 ">
        <div className="flex flex-col  rounded-xl bg-white lg:relative  lg:gap-base lg:bg-transparent  ">
          <div className=" min-w-[375px] overflow-x-auto rounded-xl  bg-white p-base lg:min-w-[417px]">
            <SidebarMenu />
          </div>
          <div className=" top-0  overflow-y-auto rounded-xl    bg-white  p-base lg:absolute  lg:left-[441px] lg:w-[887px]">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="h-12 lg:hidden"></div> */}
    </div>
  );
};

export default App;
