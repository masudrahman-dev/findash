import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png";

import BellAlertIcon from "../../icons/BellAlertIcon";
import SearchIcon from "../../icons/SearchIcon";
import Avatar from "../../atoms/avatar/Avatar";
import MenuItems from "../../molecules/menu-items/MenuItems";

const Navbar = () => {
  return (
    <div className="  flex  items-center justify-between py-5 text-white">
      <div className="flex items-center justify-between gap-20">
        <NavLink to={""}>
          <img src={logo} alt="logo" />
        </NavLink>
        <MenuItems />
      </div>
      <div className="flex items-center gap-[14px]">
        <form>
          <div>
            <label htmlFor="search" className="flex ">
              <SearchIcon />
              <input
                type="search"
                name="search"
                id="search"
                className=" "
                placeholder="search..."
              />
            </label>
          </div>
        </form>
        <BellAlertIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
