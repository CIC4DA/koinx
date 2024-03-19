import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Capabilities", to: "/capabilities", current: false },
  { name: "About", to: "/about", current: false },
  { name: "Contact Us", to: "/contact", current: false },
  { name: "Get Quote", to: "/getQuote", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white text-[18px]">
      {({ open }) => (
        <>
          <div className="mx-2.5">
            <div className="relative flex h-[85px] items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-[#8D8D8D] hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-between sm:w-full ">
                <Link to="/" className="flex flex-shrink-0 items-center">
                  <img
                    className="h-auto w-auto"
                    src="/logo1.svg"
                    alt="Your Company"
                  />
                  <img
                    className="h-auto w-auto"
                    src="/logo.svg"
                    alt="Your Company"
                  />
                </Link>
                <div className="hidden sm:block sm:items-center sm:flex sm:justify-center">
                  <div className="flex align-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-[#8D8D8D] text-black mx-3"
                            : "text-black hover:bg-[#8D8D8D] hover:text-black mx-3",
                          "rounded-full px-8 py-2 text-[18px] text-center mx-3",
                          "w-48" 
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                  <Menu.Button className="relative flex rounded-full bg-[#D9D9D9] text-sm focus:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-black sm:mr-10">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img className="h-10 w-10 rounded-full" src="/user_image.jpg" alt="" />
                      <div className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-[#D9D9D9] h-4 w-4 rounded-full text-[8px]"></div>
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/user"
                            className={classNames(
                              active ? "bg-[#8D8D8D]" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/settings"
                            className={classNames(
                              active ? "bg-[#8D8D8D]" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/signOut"
                            className={classNames(
                              active ? "bg-[#8D8D8D]" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-[#8D8D8D] text-black"
                      : "text-black hover:bg-[#8D8D8D] hover:text-black",
                    "block rounded-full px-3 py-2 text-base"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
