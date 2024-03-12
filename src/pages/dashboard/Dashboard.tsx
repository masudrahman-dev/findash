import React from "react";

import { Outlet } from "react-router-dom";
import SidebarMenu from "../../components/molecules/sidebar-menu/SidebarMenu";
import InfoCircleIcon from "../../components/icons/InfoCircleIcon";
import ChevronDownIcon from "../../components/icons/ChevronDownIcon";
import ExpenseChart from "../../components/molecules/expense-chart/ExpenseChart";
import ArrowRightIcon from "../../components/icons/ArrowRightIcon";
import clx from "../../utils/clx";
import Line from "./line/Line";
import CardHeader from "./card-header/CardHeader";
import NextSelect from "../../components/molecules/next-select/NextSelect";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Vr from "../../components/atoms/Vr/Vr";
import AnalysisChart from "../../components/molecules/analysis-chart/AnalysisChart";
import TotalBalance from "./total-balance/TotalBalance";
import Activity from "./activity/Activity";
import Expenses from "./expenses/Expenses";
import Plans from "./plans/Plans";
import Currency from "./curruncy/Currency";
import AnalysisAreaChart from "../../components/molecules/analysis-area-chart/AnalysisChart";
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
