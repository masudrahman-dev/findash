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
}

const MenuLink: React.FC<MenuLinkProps> = ({ label, path, icon }) => {
  return (
    <Disclosure as={"div"} className={"group "}>
      {({ open }) => (
        <NavLink to={path}>
          {({ isActive }) => (
            <Disclosure.Button
              className={clx(
                "flex w-full items-center justify-between  rounded-xl p-base text-title text-dark transition-colors duration-200 hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-primary  ",
                {
                  " bg-primary text-white": isActive,
                },
              )}
            >
              <div className="flex items-center gap-3 ">
                <span
                  className={clx(
                    "rounded-full bg-gray  bg-opacity-10 group-hover:bg-white group-hover:text-dark",
                    {
                      "rounded-full bg-white bg-opacity-100 text-dark":
                        isActive,
                    },
                  )}
                >
                  {icon}
                </span>
                <span className="text-[18px] font-medium">{label}</span>
              </div>

              <ChevronRightIcon
                className={clx(
                  "transform transition-transform duration-300 ease-in-out",
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
