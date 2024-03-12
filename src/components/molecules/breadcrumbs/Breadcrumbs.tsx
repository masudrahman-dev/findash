import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import ChevronRightIcon from "../../icons/ChevronRightIcon";

const Breadcrumbs = () => {
  const location = useLocation();
  const crumbs = location.pathname
    .split("/")
    .filter((match) => match !== "" && match !== "a")
    .flat();

  return (
    <div className=" ">
      {!location.pathname.includes("dashboard") && (
        <h1 className="text-2xl font-semibold text-white">Settings</h1>
      )}
      <div className="flex items-center gap-3 pt-3 text-2xl text-label font-semibold text-white">
        {crumbs.map((crumb, index) => {
          const href = `/a/${crumbs.slice(0, index + 1).join("/")}`;
          return (
            <React.Fragment key={crumb}>
              <NavLink className="inline-block " to={href}>
                {({ isActive }) => (
                  <span className={isActive ? " text-white" : "text-gray"}>
                    {crumb}
                  </span>
                )}
              </NavLink>
              {index !== crumbs.length - 1 && <ChevronRightIcon />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumbs;
