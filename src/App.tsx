import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/organisms/navber/Navbar";
import ChevronRightIcon from "./components/icons/ChevronRightIcon";
import Breadcrumb from "./components/molecules/bredcumb/Breadcrumb";

import { Disclosure } from "@headlessui/react";

import clx from "./utils/clx";
import SidebarMenu from "./components/molecules/sidebar-menu/SidebarMenu";

const App = () => {
  return (
    <div className=" bg-midnight  ">
      <div className="mx-auto max-w-[1440px] px-14 ">
        <div className="h-[267px] ">
          <Navbar />
          <Breadcrumb />
          <div className=" mt-2 p-base">
            <div className="flex gap-base">
              <div className="h-screen min-w-[417px] rounded-xl  bg-white p-base">
                <SidebarMenu />
              </div>
              <div className=" h-screen w-full rounded-xl bg-white p-base">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
