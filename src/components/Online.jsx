import React from "react";
import "../styles/Rightbar.css";
function Online({ user }) {
  return (
    <div>
      <li className="rightbarFriend">
        <span className="rightbarUserName">{user.username}</span>
        <div className="rightbarProfile">
          <img
            className="rightbarProfileImg"
            src={user.profilePicture}
            alt=""
          />
          <span className="rightbarOnline"></span>
        </div>
      </li>
    </div>
  );
}

export default Online;
