import React from "react";
import { NavLink, useMatches } from "react-router-dom";
import ChevronRightIcon from "../../icons/ChevronRightIcon";

function Breadcrumbs() {
  const matches = useMatches();
  const crumbs = matches
    .filter(
      (match) => match?.handle && typeof match.handle?.crumb === "function",
    )
    .map((match) => {
      const paths = match?.pathname.split("/").filter((part) => part !== "");
      return paths;
    })
    .flat();

  let href = "";

  return (
    <div className="pt-base">
      <h1 className="text-2xl font-semibold text-white">Settings</h1>
      <div className="flex items-center gap-3 pt-3 text-2xl text-label font-semibold text-white">
        {crumbs?.map((crumb) => {
          href += `/${crumb}`;
          console.log("crumb :>> ", crumb);
          return (
            <>
              <NavLink
                className={`} inline-block text-white`}
                key={crumb}
                to={href}
              >
                {crumb}
              </NavLink>
              <ChevronRightIcon className="last:hidden" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Breadcrumbs;
