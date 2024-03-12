import React from "react";

import TotalBalance from "./total-balance/TotalBalance";
import Activity from "./activity/Activity";
import Expenses from "./expenses/Expenses";
import Plans from "./plans/Plans";
import Currency from "./curruncy/Currency";
import Analysis from "./analysis/Analysis";
import clx from "../../utils/clx";

// const rows = "grid-rows-[minmax(209px,_1fr)";
const rows = "lg:grid-rows-[1fr_minmax(1fr,_1fr)_1fr]";

const Dashboard = () => {
  return (
    <>
      <div
        className={clx(
          "grid   grid-cols-1   gap-base  rounded-xl  lg:grid-cols-8  lg:bg-transparent ",
          rows,
        )}
      >
        <div className=" row-span-4    rounded-xl bg-white p-base lg:col-span-2 ">
          <TotalBalance />
        </div>
        <div className=" row-span-8    rounded-xl bg-white p-base lg:col-span-4 ">
          <Analysis />
        </div>

        <div className=" row-span-8  rounded-xl bg-white p-base lg:col-span-2 ">
          <Activity />
        </div>

        <div className=" row-span-8  rounded-xl bg-white p-base lg:col-span-2 ">
          <Expenses />
        </div>
        <div className="  row-span-4 rounded-xl bg-white  p-base lg:col-span-4 ">
          <Plans />
        </div>
        <div className=" row-span-4 rounded-xl bg-white p-base  lg:col-span-2">
          <Currency />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
