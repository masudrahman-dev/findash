import { Popover, Transition } from "@headlessui/react";

import { Fragment } from "react";
import HamburgerIcon from "../../icons/HamburgerIcon";
import MenuItems from "../../molecules/menu-items/MenuItems";

export default function PopoverMenu() {
  return (
    <div className="relative block w-full  lg:hidden">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              type="button"
              className="block text-white focus:outline-none lg:hidden "
            >
              <HamburgerIcon />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-0 top-[50px] z-50 min-w-[200px] rounded-xl bg-white shadow">
                <MenuItems />
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

//                 group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
