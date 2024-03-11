import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/organisms/navber/Navbar";
import Breadcrumb from "./components/molecules/bredcumb/Breadcrumb";
import SidebarMenu from "./components/molecules/sidebar-menu/SidebarMenu";

const App = () => {
  return (
    <div className=" h-[1139px] border">
      <div className="bg-midnight  ">
        <div className="mx-auto  max-w-[1440px] px-14 ">
          <div className="h-[267px] ">
            <Navbar />
            <Breadcrumb />
          </div>
        </div>
      </div>

      <div className=" mx-auto -mt-12  max-w-[1440px] px-14 ">
        <div className="441   relative flex gap-base ">
          <div className=" min-w-[417px] rounded-xl  bg-white p-base">
            <SidebarMenu />
          </div>
          <div className=" absolute left-[441px] top-0   w-[887px]  overflow-y-auto rounded-xl  bg-white p-base">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
