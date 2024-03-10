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
    <div className="flex  w-full flex-col gap-3">
      <MenuLink
        icon={<UserIcon />}
        path="admin/personal-info"
        label="Personal Information"
      />
      <MenuLink
        icon={<PreferenceIcon />}
        path="admin/preferences"
        label="Preferences"
      />
      <MenuLink
        icon={<SecurityIcon />}
        path="admin/Security"
        label="Security"
      />
    </div>
  );
};

export default SidebarMenu;
