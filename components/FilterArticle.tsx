import React, { Fragment, useContext, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Option, OptionContextType } from "../types/type";
import { OptionContext } from "../provider/context";

const filterOptions = [
  {
    label: "emailed",
    title: "Most Emailed",
  },
  {
    label: "shared",
    title: "Most Shared",
  },
  {
    label: "viewed",
    title: "Most Viewed",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const FilterArticle = () => {
  const { setOption } = useContext(OptionContext) as OptionContextType;
  const [selected, setSelected] = useState(filterOptions[0]);

  const onChangeHandler = (item: (typeof filterOptions)[0]) => {
    setSelected(item);
    setOption(item.label as Option);
  };

  return (
    <Listbox value={selected} onChange={onChangeHandler}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only">
            Change filter option
          </Listbox.Label>
          <div className="relative ">
            <div className="flex rounded-md divide-x divide-teal-600 justify-end">
              <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-teal-600">
                <div className="relative inline-flex items-center bg-teal-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                  <p className="ml-2.5 text-sm font-medium">
                    {selected!.title}
                  </p>
                </div>
                <Listbox.Button className="relative inline-flex items-center bg-teal-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500">
                  <span className="sr-only">Change filter option</span>
                  <ChevronDownIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                {filterOptions.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-teal-500" : "text-gray-900",
                        "cursor-default select-none relative p-4 text-sm"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p
                            className={
                              selected ? "font-semibold" : "font-normal"
                            }
                          >
                            {option.title}
                          </p>
                          {selected ? (
                            <span
                              className={
                                active ? "text-white" : "text-teal-500"
                              }
                            ></span>
                          ) : null}
                        </div>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default FilterArticle;
