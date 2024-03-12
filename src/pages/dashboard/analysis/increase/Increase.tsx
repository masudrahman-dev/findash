import React from "react";
import CardHeader from "../../card-header/CardHeader";
import ChevronDownIcon from "../../../../components/icons/ChevronDownIcon";
import ArrowUpRightIcon from "../../../../components/icons/ArrowUpRightIcon";
import AnalysisChart from "../../../../components/molecules/analysis-chart/AnalysisChart";

const Increase = () => {
  return (
    <div>
      <CardHeader
        title="Income Analysis"
        icon={<ChevronDownIcon iconWrapperStyle="h-5 w-5 " />}
        label="Monthly"
      />
      <div className="flex items-center justify-between pt-6">
        <div className=" space-y-4">
          <div className="flex  gap-4">
            <p className="text-4xl font-bold">$12,456,315</p>
            <sup className="btn-small hidden  lg:flex">
              <ArrowUpRightIcon />
              <span className="text-base">+3.1%</span>
            </sup>
          </div>
          <p className="text-base tracking-wider lg:flex lg:gap-1 	">
            <span className="hidden lg:block">Expense increased by</span>
            <span className="flex items-center gap-3 lg:gap-1 ">
              <span className="btn-small   lg:hidden">
                <ArrowUpRightIcon />
                <span className="text-base">+3.1%</span>
              </span>
              <span className="pr-1  text-primary">$2.172</span>
              <span className="lg:block">
                <span className="lg:hidden">increase</span> this Month
              </span>
            </span>
          </p>
        </div>
        <AnalysisChart />
      </div>
    </div>
  );
};

export default Increase;
