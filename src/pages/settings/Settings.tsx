import React from "react";

import { Outlet } from "react-router-dom";
import SidebarMenu from "../../components/molecules/sidebar-menu/SidebarMenu";

const Settings = () => {
  return (
    <div className="flex flex-col  rounded-xl bg-white lg:relative lg:gap-base  lg:bg-transparent   ">
      <div className="w-[375px] overflow-x-auto rounded-xl  bg-white p-base lg:w-[417px]">
        <SidebarMenu />
      </div>
      <div className=" top-0  overflow-y-auto rounded-xl bg-white    p-base lg:absolute  lg:left-[441px] lg:w-[887px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
