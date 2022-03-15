import React from "react";
import Feed from "../components/Feed";
import ProfileSidebar from "../components/ProfileSidebar";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/Profile.css";
function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/3.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">mahdi</h4>
              <span className="profileInfoDesc">سلام دوستان</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <ProfileSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
