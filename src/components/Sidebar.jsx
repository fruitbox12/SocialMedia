import React from "react";
import "../styles/Sidebar.css";
import {
  BsFillRssFill,
  BsFillBookmarkFill,
  BsFillChatLeftFill,
  BsCameraVideoFill,
  BsFillQuestionCircleFill,
  BsBriefcaseFill,
  BsCalendarDateFill,
} from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { Users } from "../dummyData";
import Closefrined from "./Closefrined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <BsFillRssFill className="siderbarIcon" />
            <span className="sidebarListItemFeed">اخبار</span>
          </li>
          <li className="sidebarListItem">
            <BsFillChatLeftFill className="siderbarIcon" />
            <span className="sidebarListItemFeed">گفت و گو</span>
          </li>
          <li className="sidebarListItem">
            <BsCameraVideoFill className="siderbarIcon" />
            <span className="sidebarListItemFeed">فیلم ها</span>
          </li>
          <li className="sidebarListItem">
            <HiUserGroup className="siderbarIcon" />
            <span className="sidebarListItemFeed">گروه ها</span>
          </li>
          <li className="sidebarListItem">
            <BsFillBookmarkFill className="siderbarIcon" />
            <span className="sidebarListItemFeed">نشان شده ها </span>
          </li>
          <li className="sidebarListItem">
            <BsFillQuestionCircleFill className="siderbarIcon" />
            <span className="sidebarListItemFeed">سوالات</span>
          </li>
          <li className="sidebarListItem">
            <BsBriefcaseFill className="siderbarIcon" />
            <span className="sidebarListItemFeed">شغل ها</span>
          </li>
          <li className="sidebarListItem">
            <BsCalendarDateFill className="siderbarIcon" />
            <span className="sidebarListItemFeed">رویدادها</span>
          </li>
          <li className="sidebarListItem">
            <FaUserGraduate className="siderbarIcon" />
            <span className="sidebarListItemFeed">آموزش ها</span>
          </li>
        </ul>
        <button className="sidebarButton">دیدن موارد بیشتر</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <Closefrined key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
