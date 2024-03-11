import React from "react";
import { NavLink } from "react-router-dom";

const menuItemStyle =
  "py-medium text-medium rounded-xl px-8 text-gray transition-colors duration-100  hover:bg-white hover:bg-opacity-10  hover:text-white";

const MenuItems = () => {
  return (
    <>
      <ul className=" flex flex-col items-center gap-2 lg:flex-row">
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
