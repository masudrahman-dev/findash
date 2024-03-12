import React from "react";


import TotalBalance from "./total-balance/TotalBalance";
import Activity from "./activity/Activity";
import Expenses from "./expenses/Expenses";
import Plans from "./plans/Plans";
import Currency from "./curruncy/Currency";
import Analysis from "./analysis/Analysis";

const Dashboard = () => {
  return (
    <>
      <div className="grid   grid-cols-8   rounded-xl  lg:gap-base  lg:bg-transparent ">
        <div className="   rounded-xl bg-white p-base lg:col-span-2 ">
          <TotalBalance />
        </div>
        <div className="   w-full rounded-xl bg-white p-base lg:col-span-4 ">
          <Analysis />
        </div>

        <div className="  rounded-xl bg-white p-base lg:col-span-2 ">
          <Activity />
        </div>

        <div className="  rounded-xl bg-white p-base lg:col-span-2 ">
          <Expenses />
        </div>
        <div className=" w-full rounded-xl bg-white  p-base lg:col-span-4 ">
          <Plans />
        </div>
        <div className=" rounded-xl bg-white p-base  lg:col-span-2">
          <Currency />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
