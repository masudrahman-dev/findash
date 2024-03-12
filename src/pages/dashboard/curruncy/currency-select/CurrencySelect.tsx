import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import ChevronDownIcon from "../../../../components/icons/ChevronDownIcon";

const people = [
  {
    locale: "de-DE",
    currency: "EUR",
  },
  {
    locale: "en-US",
    currency: "USD",
  },
  {
    locale: "en-GB",
    currency: "GBP",
  },
  {
    locale: "ja-JP",
    currency: "JPY",
  },
  {
    locale: "en-IN",
    currency: "INR",
  },
];
const CurrencySelect: React.FC = () => {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="relative w-[152px]">
      <Listbox as={"div"} value={selected} onChange={setSelected}>
        <Listbox.Button className=" flex w-full cursor-default  items-center justify-between rounded-full  border border-silver  pl-4   focus:outline-none  ">
          <span className="block truncate text-widest text-nowrap">1 | {selected.currency}</span>
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
                      `relative cursor-default select-none rounded-xl px-6 py-3  ${
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
                          {person.currency}
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
};

export default CurrencySelect;
