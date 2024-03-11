import React from "react";
import { NavLink, useMatches } from "react-router-dom";
import ChevronRightIcon from "../../icons/ChevronRightIcon";

const Breadcrumbs = React.memo(() => {
  const matches = useMatches();
  const crumbs = matches
    .filter(
      (match) => match?.handle && typeof match.handle.crumb === "function",
    )
    .map((match) => match.pathname.split("/").filter((part) => part !== ""))
    .flat();

  return (
    <div className="pt-base">
      <h1 className="text-2xl font-semibold text-white">Settings</h1>
      <div className="flex items-center gap-3 pt-3 text-2xl text-label font-semibold text-white">
        {crumbs.map((crumb, index) => {
          const href = `/${crumbs.slice(0, index + 1).join("/")}`;
          return (
            <React.Fragment key={crumb}>
              <NavLink className="inline-block text-white" to={href}>
                {crumb}
              </NavLink>
              {index !== crumbs.length - 1 && <ChevronRightIcon />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
});

export default Breadcrumbs;
