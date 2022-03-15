import React from "react";
import { Users } from "../dummyData";
import "../styles/Rightbar.css";
import Online from "./Online";
function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <div>
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
    );
  };

  const ProfileRightBar = () => {
    return (
      <div>
        <h4 className="rightbarTitle">اطلاعات کاربر</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbaInfoKey">محل سکونت</span>
            <span className="rightbaInfoValue">مشهد</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbaInfoKey">محل تحصیل</span>
            <span className="rightbaInfoValue">شاهرود</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbaInfoKey">وضعیت رابطه</span>
            <span className="rightbaInfoValue">مجرد</span>
          </div>
        </div>
        <h4 className="rightbarTitle">دوستان کاربر</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">سارا</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">سارا</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">سارا</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">سارا</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">سارا</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">سارا</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  );
}

export default Rightbar;
