import React, { ReactNode } from "react";
import InfoCircleIcon from "../../../components/icons/InfoCircleIcon";
import ArrowRightIcon from "../../../components/icons/ArrowRightIcon";

interface CardHeaderProps {
  title?: string;
  label?: string;
  icon?: ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, label, icon }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="flex items-center gap-1 text-nowrap text-subtitle ">
        <span>{title ? title : "Recent Activiy"}</span>
        <InfoCircleIcon iconWrapperStyle="h-5 w-5" />
      </p>
      <div className="flex items-center gap-1  ">
        <span className="text-nowrap text-medium text-gray">
          {label ? label : "See more"}
        </span>
        {icon ? icon : <ArrowRightIcon />}
      </div>
    </div>
  );
};

export default CardHeader;
