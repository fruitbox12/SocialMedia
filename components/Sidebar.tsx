import React from "react";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SiderbarRow from "./SiderbarRow";

function Sidebar() {
  return (
    <div className="2xl:p-2 md:mt-3 2xl:mt-5 max-w-[600px] xl:min-w-[300px] ">
      <SiderbarRow Icon={UsersIcon} title="friends" />
      <SiderbarRow Icon={UserGroupIcon} title="Grupes" />
      <SiderbarRow Icon={ShoppingBagIcon} title="Market Place" />
      <SiderbarRow Icon={DesktopComputerIcon} title="Watch" />
      <SiderbarRow Icon={CalendarIcon} title="Events" />
      <SiderbarRow Icon={ClockIcon} title="Memories" />
      <SiderbarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
