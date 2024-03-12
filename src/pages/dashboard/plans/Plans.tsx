import React from "react";
import InfoCircleIcon from "../../../components/icons/InfoCircleIcon";
import ArrowRightIcon from "../../../components/icons/ArrowRightIcon";
import IconWrapper from "../../../components/icons/IconWrapper";
import PlansCard from "./plans-card/PLansCard";

const Plans = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-1 text-nowrap text-subtitle ">
          <span>My Pocked Plans</span>
          <InfoCircleIcon iconWrapperStyle="h-5 w-5" />
        </p>
        <div className="flex items-center gap-1  ">
          <span className="text-nowrap text-medium text-gray">See more</span>
          <ArrowRightIcon />
        </div>
      </div>

      <div className="flex w-[350px] gap-base overflow-x-auto pt-4 lg:w-full ">
        <PlansCard />
        <PlansCard />
        <PlansCard />
        <PlansCard />
      </div>
    </div>
  );
};

export default Plans;
