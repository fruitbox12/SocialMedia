import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import {
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridAddIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-1 shadow-md ">
      <div className="flex items-center ">
        <Image
          src="http://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="hidden md:flex ml-2 bg-gray-100 items-center rounded-full p-2  ">
          <SearchIcon className="h-6 text-gray-600 " />
          <input
            className=" bg-transparent flex ml-2 outline-none items-center flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active={true} Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className="flex items-center sm:space-x-2 justify-end ">
        <p className="whitespace-nowrap font-semi-bold  pr-3">Mahdi Parivash</p>
        <ViewGridAddIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};
export default Header;
