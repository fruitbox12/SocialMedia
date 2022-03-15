import React, { useState } from "react";
import "../styles/Post.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Users } from "../dummyData";

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="PostImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              onClick={likeHandler}
              className="likeIcon"
              src="/assets/like.png"
              alt=""
            />
            <img
              onClick={likeHandler}
              className="likeIcon"
              src="/assets/heart.png"
              alt=""
            />
            <span className="likeCounter">این نوشته {like} بار لایک شده</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> {post.comment} نظرات</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
