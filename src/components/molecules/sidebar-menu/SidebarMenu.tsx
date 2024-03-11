import { Disclosure } from "@headlessui/react";
import React from "react";
import ChevronRightIcon from "../../icons/ChevronRightIcon";
import clx from "../../../utils/clx";
import { NavLink } from "react-router-dom";
import MenuLink from "../menu-link/MenuLink";
import UserIcon from "../../icons/UserIcon";
import SecurityIcon from "../../icons/SecurityIcon";
import PreferenceIcon from "../../icons/PreferenceIcon";

const SidebarMenu = () => {
  return (
    <div className="flex w-full gap-3 overflow-x-auto   lg:flex-col">
      <MenuLink
        icon={<UserIcon />}
        path="/a/settings/personal-information"
        label="Personal Information"
      />
      <MenuLink
        icon={<PreferenceIcon />}
        path="/a/settings/preferences"
        label="Preferences"
      />
      <MenuLink
        icon={<SecurityIcon />}
        path="/a/settings/security"
        label="Security"
      />
    </div>
  );
};

export default SidebarMenu;
