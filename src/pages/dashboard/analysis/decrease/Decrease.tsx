import React from "react";
import CardHeader from "../../card-header/CardHeader";
import ChevronDownIcon from "../../../../components/icons/ChevronDownIcon";
import ArrowDownRightIcon from "../../../../components/icons/ArrowDownRightIcon";
import AnalysisAreaChart from "../../../../components/molecules/analysis-area-chart/AnalysisChart";

const Decrease = () => {
  return (
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
          <p className="text-base tracking-wider lg:flex lg:gap-1 	">
            <span className="hidden lg:block">Expense increased by</span>
            <span className="flex items-center gap-3 lg:gap-1 ">
              <span className="btn-small bg-ms-red-100 text-ms-red   lg:hidden">
                <ArrowDownRightIcon />
                <span className="text-base">+3.1%</span>
              </span>
              <span className="text-ms-red  pr-1">$2.172</span>
              <span className="lg:block">
                <span className="lg:hidden"> decrease</span> this Month
              </span>
            </span>
          </p>
        </div>
        <AnalysisAreaChart />
      </div>
    </div>
  );
};

export default Decrease;
