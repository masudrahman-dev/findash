import React from "react";
import InfoCircleIcon from "../../../components/icons/InfoCircleIcon";
import ChevronDownIcon from "../../../components/icons/ChevronDownIcon";
import ExpenseChart from "../../../components/molecules/expense-chart/ExpenseChart";

const Expenses = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-1 text-nowrap text-subtitle ">
          <span className="">Expense Catergory</span>
          <InfoCircleIcon iconWrapperStyle="h-5 w-5" />
        </p>
        <div className="flex items-center gap-1  ">
          <span className="text-nowrap text-medium text-gray">Monthly</span>
          <ChevronDownIcon iconWrapperStyle="h-5 w-5 " />
        </div>
      </div>
      <div className="  ">
        <ExpenseChart />
      </div>
    </div>
  );
};

export default Expenses;
