import React from "react";
import "../styles/Share.css";

import {
  BsFillTagFill,
  BsFillEmojiSmileFill,
  BsFilm,
  BsGeoAltFill,
} from "react-icons/bs";

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input placeholder="چه چیزی در ذهن شما است؟" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <BsFilm style={{ fill: "tomato" }} className="shareIcon" />
              <span className="shareOptionText">مدیا</span>
            </div>
            <div className="shareOption">
              <BsFillTagFill style={{ fill: "blue" }} className="shareIcon" />
              <span className="shareOptionText">برچسب</span>
            </div>
            <div className="shareOption">
              <BsGeoAltFill style={{ fill: "green" }} className="shareIcon" />
              <span className="shareOptionText">موقعیت</span>
            </div>
            <div className="shareOption">
              <BsFillEmojiSmileFill
                style={{ fill: "goldenrod" }}
                className="shareIcon"
              />
              <span className="shareOptionText">احساس</span>
            </div>
          </div>
          <button className="shareButton">فرستادن</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
