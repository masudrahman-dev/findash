import { Disclosure } from "@headlessui/react";
import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import ChevronRightIcon from "../../icons/ChevronRightIcon";
import clx from "../../../utils/clx";
import UserIcon from "../../icons/UserIcon";

interface MenuLinkProps {
  label: string;
  path: string;
  icon?: ReactNode;
  liStyle?: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ label, path, icon, liStyle }) => {
  return (
    <Disclosure as={"div"} className={"group  "}>
      {({ open }) => (
        <NavLink to={path}>
          {({ isActive }) => (
            <Disclosure.Button
              className={clx(
                "flex w-full items-center justify-between py-3 text-title text-dark transition-colors duration-200 focus:outline-none focus-visible:ring-primary lg:rounded-xl lg:bg-primary lg:p-base lg:hover:bg-primary lg:hover:text-white",
                {
                  " text-primary lg:bg-primary lg:text-white": isActive,
                },
              )}
            >
              <div className="flex items-center gap-3 ">
                <span
                  className={clx(
                    "hidden   rounded-full bg-gray bg-opacity-10 group-hover:bg-white group-hover:text-dark lg:block",
                    {
                      "rounded-full bg-white bg-opacity-100 text-dark":
                        isActive,
                    },
                  )}
                >
                  {icon}
                </span>
                <span className="text-nowrap  text-title font-medium">
                  {label}
                </span>
              </div>

              <ChevronRightIcon
                className={clx(
                  "hidden transform transition-transform duration-300 ease-in-out lg:block",
                  {
                    "rotate-90": open,
                    "rotate-0": !open,
                  },
                )}
              />
            </Disclosure.Button>
          )}
        </NavLink>
      )}
    </Disclosure>
  );
};

export default MenuLink;
