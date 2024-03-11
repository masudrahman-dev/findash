import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import ChevronDownIcon from "../../icons/ChevronDownIcon";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  // { name: "Tom Cook" },
  // { name: "Tanya Fox" },
  // { name: "Hellen Schmidt" },
];

export default function NextSelect() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="w-ful relative  ">
      <Listbox as={"div"} value={selected} onChange={setSelected}>
        <Listbox.Button className=" flex w-full  cursor-default items-center justify-between rounded-xl border border-silver py-2 pl-6   focus:outline-none  ">
          <span className="block truncate">{selected.name}</span>
          <span className="pointer-events-none  flex items-center ">
            <ChevronDownIcon className="text-gray-400 " aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100 "
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="relative ">
            <Listbox.Options className="absolute top-1 z-50  w-full  bg-white ">
              <div className="mb-6 rounded-xl  border  border-silver">
                {people.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none rounded-xl px-6 py-5  ${
                        active ? "bg-primary text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </div>
            </Listbox.Options>
          </div>
        </Transition>
      </Listbox>
    </div>
  );
}
