import moment from "moment";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import CalenderIcon from "../../icons/CalenderIcon";
import IconWrapper from "../../icons/IconWrapper";

const SubMenuItems = () => {


  const convertPixelsToPercentage = (fixedValue, containerSize) => {
    return (fixedValue / containerSize) * 100;
  };

  const fixedValueInPixels = 375;
  const containerWidthInPixels = 1000;
  const containerHeightInPixels = 800;

  const widthPercentage = convertPixelsToPercentage(
    fixedValueInPixels,
    containerWidthInPixels,
  );
  const heightPercentage = convertPixelsToPercentage(
    fixedValueInPixels,
    containerHeightInPixels,
  );

  console.log("Width Percentage:", widthPercentage + "%");
  console.log("Height Percentage:", heightPercentage + "%");
  return (
    <div>
      <div className=" flex justify-between pt-6">
        <ul className="flex w-[250px] items-center justify-between  overflow-x-auto lg:w-[375px]  ">
          <li>
            <NavLink to={"/a/dashboard/overview"}>
              {({ isActive }) => (
                <span className={isActive ? " text-white   " : "text-gray"}>
                  Overview
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/a/dashboard/transaction"}>
              {({ isActive }) => (
                <span className={isActive ? " text-white " : "text-gray"}>
                  Transaction
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/a/dashboard/statistics"}>
              {({ isActive }) => (
                <span className={isActive ? " text-white" : "text-gray"}>
                  Statistics
                </span>
              )}
            </NavLink>
          </li>
        </ul>
        <div className="hidden text-title  text-white lg:block">
          <IconWrapper iconWrapperStyle="lg:w-[157px] items-center gap-3 flex ">
            <CalenderIcon />
            <p className="text-nowrap ">{moment().format("MMM DD, YY")}</p>
          </IconWrapper>
        </div>
        <CalenderIcon className="block  lg:hidden" />
      </div>
      <div className="mt-2 h-[2px]  w-[375px] rounded-full  bg-gray"></div>
    </div>
  );
};

export default SubMenuItems;
