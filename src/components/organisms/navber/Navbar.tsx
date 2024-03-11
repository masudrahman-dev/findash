import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png";

import BellAlertIcon from "../../icons/BellAlertIcon";
import SearchIcon from "../../icons/SearchIcon";
import Avatar from "../../atoms/avatar/Avatar";
import MenuItems from "../../molecules/menu-items/MenuItems";
import HamburgerIcon from "../../icons/HamburgerIcon";
import PopoverMenu from "../popover-menu/PopoverMenu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex items-center justify-between gap-20">
        <PopoverMenu />
        <NavLink className={"hidden lg:block"} to={""}>
          <img src={logo} alt="logo" />
        </NavLink>

        {/* <MenuItems /> */}
      </div>
      <div className="flex items-center  gap-[14px] ">
        {/* <form>
          <label
            htmlFor="search"
            className="relative flex items-center text-gray hover:text-white"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="" />
            </div>
            <input
              type="search"
              name="search"
              id="search"
              className="rounded-full bg-gray bg-opacity-10 py-3 pe-3 ps-10 text-white placeholder-gray placeholder:text-gray focus:outline-none sm:text-sm"
              placeholder="Search..."
            />
          </label>
        </form> */}
        <BellAlertIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
