import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/organisms/navber/Navbar";
import ChevronRightIcon from "./components/icons/ChevronRightIcon";

const App = () => {
  return (
    <div className=" bg-midnight  ">
      <div className="mx-auto max-w-[1440px] px-14 ">
        <div className="h-[267px] ">
          <Navbar />

          <h1 className="text-2xl font-semibold text-white">Settings</h1>
          <div className="flex items-center text-white gap-1 text-label font-semibold">
            <p className="text-gray">Settings</p>
            <ChevronRightIcon />
            <p>Overview</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
