import React from "react";
import { NavLink } from "react-router-dom";

const menuItemStyle =
  "lg:py-medium py-1 px-3  text-medium rounded-xl lg:px-8 text-gray transition-colors duration-100  hover:bg-white hover:bg-opacity-10  lg:hover:text-white";

const MenuItems = () => {
  return (
    <>
      <ul className=" flex flex-col justify-start text-nowrap py-2 lg:flex-row lg:items-center lg:gap-2">
        <li className={menuItemStyle}>
          <NavLink to={""}>Dashboard</NavLink>
        </li>
        <li className={menuItemStyle}>
          <NavLink to={"/wallets"}>Wallets</NavLink>
        </li>
        <li className={menuItemStyle}>
          <NavLink to={"/"}>Settings</NavLink>
        </li>
        <li className={menuItemStyle}>
          <NavLink to={"/help"}>Help & Center</NavLink>
        </li>
      </ul>
    </>
  );
};

export default MenuItems;
