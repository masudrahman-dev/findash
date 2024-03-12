import React from "react";
import clx from "../../../utils/clx";
import Navbar from "../navber/Navbar";
import Breadcrumbs from "../../molecules/breadcrumbs/Breadcrumbs";
import SubMenuItems from "../../molecules/sub-menu-items/SubMenuItems";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="bg-midnight  ">
      <div className="mx-auto  max-w-[1440px] px-3 lg:px-14 ">
        <div
          className={clx("h-[267px]", {
            "h-[337px]": location.pathname.includes("dashboard"),
          })}
        >
          <Navbar />
          {location.pathname.includes("dashboard") && (
            <div>
              <p className="text-title text-white">
                Welcome back, Rainer Yaeger 👏🏻
              </p>
            </div>
          )}

          <Breadcrumbs />
          <div
            className={clx("hidden", {
              block: location.pathname.includes("dashboard"),
            })}
          >
            <SubMenuItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
