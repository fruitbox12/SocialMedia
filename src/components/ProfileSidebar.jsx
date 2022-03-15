import React from "react";
import "../styles/ProfileSidebar.css";
function ProfileSidebar() {
  return (
    <div className="ProfileSidebar">
      <div className="ProfileSidebarWrapper">
        <h4 className="ProfileSidebarTitle">اطلاعات کاربر</h4>
        <div className="ProfileSidebarInfo">
          <div className="ProfileSidebarInfoItem">
            <span className="ProfileSidebarInfoKey">محل سکونت</span>
            <span className="ProfileSidebarInfoValue">مشهد</span>
          </div>
          <div className="ProfileSidebarInfoItem">
            <span className="ProfileSidebarInfoKey">محل تحصیل</span>
            <span className="ProfileSidebarInfoValue">شاهرود</span>
          </div>
          <div className="ProfileSidebarInfoItem">
            <span className="ProfileSidebarInfoKey">وضعیت رابطه</span>
            <span className="ProfileSidebarInfoValue">مجرد</span>
          </div>
        </div>
        <h4 className="ProfileSidebarTitle">دوستان کاربر</h4>
        <div className="ProfileSidebarFollowings">
          <div className="ProfileSidebarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="ProfileSidebarFollowingImg"
            />
            <span className="ProfileSidebarFollowingName">سارا</span>
          </div>
          <div className="ProfileSidebarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="ProfileSidebarFollowingImg"
            />
            <span className="ProfileSidebarFollowingName">سارا</span>
          </div>
          <div className="ProfileSidebarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="ProfileSidebarFollowingImg"
            />
            <span className="ProfileSidebarFollowingName">سارا</span>
          </div>
          <div className="ProfileSidebarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="ProfileSidebarFollowingImg"
            />
            <span className="ProfileSidebarFollowingName">سارا</span>
          </div>
          <div className="ProfileSidebarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="ProfileSidebarFollowingImg"
            />
            <span className="ProfileSidebarFollowingName">سارا</span>
          </div>
          <div className="ProfileSidebarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="ProfileSidebarFollowingImg"
            />
            <span className="ProfileSidebarFollowingName">سارا</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileSidebar;
