import { Dropdown } from "flowbite-react";
import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown({ options, icon }) {

  const handleDropdown = (e) => {
    console.log(e);
  };

  return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className=" space-x-2 inline-flex h-9 w-56 justify-center rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium shadow-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-0">
            {icon == "faBars" && (
              <FontAwesomeIcon
                icon={faBars}
                className="text-lg text-gray-600"
              />
            )}
            <span>All Categories</span>
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 divide-y divide-gray-100">
              {options.map((option, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {option}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  );
}
