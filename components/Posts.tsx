import React, { useState } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState(Array());

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          message={post.message}
          email={post.email}
          date={post.date}
          image={post.image}
          postImage={post.postImage}
        />
      ))}
    </div>
  );
}

export default Posts;
