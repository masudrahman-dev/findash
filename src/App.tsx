import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/organisms/navber/Navbar";
import Breadcrumbs from "./components/molecules/breadcrumbs/Breadcrumbs";
import clx from "./utils/clx";
import moment from "moment";
import IconWrapper from "./components/icons/IconWrapper";
import CalenderIcon from "./components/icons/CalenderIcon";

const App = () => {
  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
    navigate("/a/dashboard/personal-information");
  }, []);

  return (
    <div className=" h-[1139px] ">
      <div className="bg-midnight  ">
        <div className="mx-auto  max-w-[1440px] px-2 lg:px-14 ">
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

            <div>
              <div className=" flex justify-between pt-6">
                <ul className="flex  w-[375px]  justify-between text-white  ">
                  <li>
                    <NavLink to={"/a/dashboard/overview"}>
                      {({ isActive }) => (
                        <span
                          className={isActive ? " text-white" : "text-gray"}
                        >
                          Overview
                        </span>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/a/dashboard/transaction"}>
                      {({ isActive }) => (
                        <span
                          className={isActive ? " text-white" : "text-gray"}
                        >
                          Transaction
                        </span>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/a/dashboard/statistics"}>
                      {({ isActive }) => (
                        <span
                          className={isActive ? " text-white" : "text-gray"}
                        >
                          Statistics
                        </span>
                      )}
                    </NavLink>
                  </li>
                </ul>
                <div className="text-title text-white ">
                  <IconWrapper iconWrapperStyle="w-[157px] items-center gap-3 flex ">
                    <CalenderIcon />
                    <p className="text-nowrap">
                      {moment().format("MMM DD, YY")}
                    </p>
                  </IconWrapper>
                </div>
              </div>
              <div className="h-[2px] w-[375px]  rounded-full  bg-gray"></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto -mt-12  max-w-[1440px] px-2 lg:px-14 ">
        <Outlet />
      </div>
      {/* FIXME: on mobile version lg:hidden */}
      <div className="h-12 "></div>
    </div>
  );
};

export default App;
