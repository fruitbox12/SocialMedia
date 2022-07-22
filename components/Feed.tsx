import React from "react";
import InputBox from "./InputBox";
import Post from "./Post";
import Stories from "./Stories";

function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-60 overflow-y-auto">
      <div className="mx-auto max-w-xl md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Post />
      </div>
    </div>
  );
}

export default Feed;
