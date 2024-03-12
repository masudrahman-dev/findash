import React from "react";
import AnalysisAreaChart from "../../../components/molecules/analysis-area-chart/AnalysisChart";
import Vr from "../../../components/atoms/Vr/Vr";
import AnalysisChart from "../../../components/molecules/analysis-chart/AnalysisChart";
import CardHeader from "../card-header/CardHeader";
import ChevronDownIcon from "../../../components/icons/ChevronDownIcon";
import ArrowUpRightIcon from "../../../components/icons/ArrowUpRightIcon";
import ArrowDownRightIcon from "../../../components/icons/ArrowDownRightIcon";

const Analysis = () => {
  return (
    <>
      <div>
        <CardHeader
          title="Income Analysis"
          icon={<ChevronDownIcon iconWrapperStyle="h-5 w-5 " />}
          label="Monthly"
        />
        <div className="flex items-start justify-between pt-6">
          <div className=" space-y-4">
            <div className="flex  gap-4">
              <p className="text-4xl font-bold">$12,456,315</p>
              <sup className="btn-small hidden  lg:flex">
                <ArrowUpRightIcon />
                <span className="text-base">+3.1%</span>
              </sup>
            </div>
            <p className="text-base tracking-wider 	">
              <span className="hidden lg:block">Expense increased by</span>

              <span className="flex items-center gap-3 lg:hidden">
                <span className="btn-small   lg:hidden">
                  <ArrowUpRightIcon />
                  <span className="text-base">+3.1%</span>
                </span>
                <span className="pr-1 text-primary">$2.172</span>
                <span>this Month</span>
              </span>
            </p>
          </div>
          <AnalysisChart />
        </div>
      </div>
      <Vr className="my-6" />
      <div>
        <CardHeader
          title="Income Analysis"
          icon={<ChevronDownIcon iconWrapperStyle="h-5 w-5 " />}
          label="Monthly"
        />
        <div className="flex  justify-between pt-6">
          <div className=" space-y-4">
            <div className="flex  gap-4">
              <p className="text-4xl font-bold">$12,456,315</p>
              <sup className="btn-small  bg-ms-red-100 text-ms-red hidden  lg:flex">
                <ArrowDownRightIcon />
                <span className="text-base">+3.1%</span>
              </sup>
            </div>
            <p className="text-base tracking-wider	">
              <span className="hidden lg:block">Expense Decrease by</span>
              <span className="flex items-center gap-3 lg:hidden">
                <span className="btn-small  bg-ms-red text-ms-red-100 lg:hidden">
                  <ArrowDownRightIcon />
                  <span className="text-base">+3.1%</span>
                </span>
                <span className="text-ms-red pr-1">$2.172</span>
                <span>this Month</span>
              </span>
            </p>
          </div>
          <AnalysisAreaChart />
        </div>
      </div>
    </>
  );
};

export default Analysis;
