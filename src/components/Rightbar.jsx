import React from "react";
import "../styles/Rightbar.css";
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
          <li className="rightbarFriend">
            <span className="rightbarUserName">آرمان فرخی</span>
            <div className="rightbarProfile">
              <img
                className="rightbarProfileImg"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
          </li>
          <li className="rightbarFriend">
            <span className="rightbarUserName">آرمان فرخی</span>
            <div className="rightbarProfile">
              <img
                className="rightbarProfileImg"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
          </li>
          <li className="rightbarFriend">
            <span className="rightbarUserName">آرمان فرخی</span>
            <div className="rightbarProfile">
              <img
                className="rightbarProfileImg"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
          </li>
          <li className="rightbarFriend">
            <span className="rightbarUserName">آرمان فرخی</span>
            <div className="rightbarProfile">
              <img
                className="rightbarProfileImg"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
          </li>
          <li className="rightbarFriend">
            <span className="rightbarUserName">آرمان فرخی</span>
            <div className="rightbarProfile">
              <img
                className="rightbarProfileImg"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
