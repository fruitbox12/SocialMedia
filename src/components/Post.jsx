import React from "react";
import "../styles/Post.css";
import { BsThreeDotsVertical } from "react-icons/bs";
function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className="postUserName">مهدی پریوش</span>
            <span className="postDate">لحظاتی پیش</span>
          </div>
          <div className="postTopRight">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">سلام این اولین نوشته من است</span>
          <img className="PostImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="likeCounter">این نوشته ۳۲ بار لایک شده</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">۹ نظرات</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
