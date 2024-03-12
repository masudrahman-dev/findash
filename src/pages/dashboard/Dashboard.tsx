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

const Dashboard = () => {
  return (
    <>
      <div className="grid   grid-cols-8   rounded-xl  lg:gap-base  lg:bg-transparent ">
        <div className="   rounded-xl bg-white p-base lg:col-span-2 ">
          <TotalBalance />
        </div>
        <div className="   w-full rounded-xl bg-white p-base lg:col-span-4 ">
          <div>
            <CardHeader
              title="Income Analysis"
              icon={<ChevronDownIcon iconWrapperStyle="h-5 w-5 " />}
              label="Monthly"
            />

            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex  gap-4">
                  <p className="text-4xl font-bold">$12,456,315</p>
                  <sup className="btn-small">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                    <span className="text-base">+3.1%</span>
                  </sup>
                </div>
                <p className="text-base tracking-wider	">
                  Expense increased by{" "}
                  <span className="pr-1 text-primary">$2.172</span>
                  <span>this Month</span>
                </p>
              </div>
              <AnalysisChart />
            </div>
          </div>
          <Vr />
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
