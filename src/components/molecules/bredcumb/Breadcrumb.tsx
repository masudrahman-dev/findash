import React from "react";
import ChevronRightIcon from "../../icons/ChevronRightIcon";

const Breadcrumb = () => {
  return (
    <>
      <div className="pt-base">
        <h1 className="text-2xl font-semibold text-white">Settings</h1>
        <div className="flex items-center  gap-1 pt-3 text-2xl text-label font-semibold text-white">
          <p className="text-gray ">Settings</p>
          <ChevronRightIcon />
          <p>Overview</p>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
