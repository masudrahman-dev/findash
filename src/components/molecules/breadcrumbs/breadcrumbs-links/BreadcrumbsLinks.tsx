import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import { NavLink } from "react-router-dom";

const BreadcrumbsLinks = ({ pathname }) => {
  const links = pathname.split("/").filter((part) => part !== "");
  let href = "";
  return (
    <div className="flex items-center gap-3 pt-3 text-2xl text-label font-semibold text-white">
      {links.map((crumb) => {
        href += `/${crumb}`;
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
  );
};

export default BreadcrumbsLinks;
