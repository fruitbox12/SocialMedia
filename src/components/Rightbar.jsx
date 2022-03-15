import React from "react";
import { Users } from "../dummyData";
import "../styles/Rightbar.css";
import Online from "./Online";
function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <span className="birthdayTags">
            <bold>ارمان فرخی</bold> و ۳ دوست دیگر امروز تولدشان است
          </span>
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
        </div>
        <img className="righbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">دوستان آنلاین</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
