import React from "react";
import "../styles/Topbar.css";
import { FaSearch, FaUser, FaBell, FaComment } from "react-icons/fa";
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">MahdiBook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <FaSearch className="searchIcon" />
          <input
            placeholder="جست و جو برای پیدا کردن دوست،نوشته یا فیلم"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topBarLinks">
          <span className="topbarLink">خانه</span>
          <span className="topbarLink">وضعیت ها</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FaUser />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <FaComment />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <FaBell />
            <span className="topbarIconBadge">6</span>
          </div>
        </div>
        <img src="./assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}

export default Topbar;
