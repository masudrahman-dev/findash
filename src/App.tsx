import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/organisms/navber/Navbar";
import Breadcrumbs from "./components/molecules/breadcrumbs/Breadcrumbs";
import clx from "./utils/clx";
import moment from "moment";

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
              <div className=" flex justify-between">
                <ul className="flex  w-[375px]  justify-between text-white  ">
                  <li>
                    <NavLink to={"overview"}>Overview</NavLink>
                  </li>
                  <li>
                    <NavLink to={"transaction"}>Transaction</NavLink>
                  </li>
                  <li>
                    <NavLink to={"statistics"}>Statistics</NavLink>
                  </li>
                </ul>
                <div className="text-title text-white">
                  <p>{moment().format("MMM DD, YY")}</p>
                </div>
              </div>
            </div>

            <div className="h-1 w-[375px]  rounded-full  bg-gray"></div>
          </div>
        </div>
      </div>

      <div className=" mx-auto -mt-12  max-w-[1440px] px-2 lg:px-14 ">
        <Outlet />
      </div>

      <div className="h-12 lg:hidden"></div>
    </div>
  );
};

export default App;
