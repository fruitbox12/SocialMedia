import React from "react";
import "../styles/Sidebar.css";
function Closefrined({ user }) {
  return (
    <li className="sidebarFriend">
      <img className="siderbarFrindImg" src={user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}

export default Closefrined;
