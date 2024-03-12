import React from "react";
import { NavLink } from "react-router-dom";
import clx from "../../../utils/clx";

const menuItemStyle =
  "lg:py-medium  px-3 py-1 text-medium rounded-xl lg:px-8 text-gray transition-colors duration-100  hover:bg-white hover:bg-opacity-10  lg:hover:text-white";

const MenuItems = () => {
  return (
    <>
      <ul className=" flex flex-col justify-start text-nowrap py-2 lg:flex-row lg:items-center lg:gap-2">
        <li>
          <NavLink to={"/a/dashboard/overview"}>
            {({ isActive }) => {
              return (
                <span
                  className={clx(menuItemStyle, {
                    "bg-white bg-opacity-10 text-white": isActive,
                  })}
                >
                  Dashboard
                </span>
              );
            }}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/a/wallets"}>
            {({ isActive }) => {
              return (
                <span
                  className={clx(menuItemStyle, {
                    "bg-white bg-opacity-10 text-white": isActive,
                  })}
                >
                  Wallets
                </span>
              );
            }}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/a/settings/personal-information"}>
            {({ isActive }) => {
              return (
                <span
                  className={clx(menuItemStyle, {
                    "bg-white bg-opacity-10 text-white": isActive,
                  })}
                >
                  Settings
                </span>
              );
            }}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/a/help"}>
            {({ isActive }) => {
              return (
                <span
                  className={clx(menuItemStyle, {
                    "bg-white bg-opacity-10 text-white": isActive,
                  })}
                >
                  {" "}
                  Help & Center
                </span>
              );
            }}
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MenuItems;
