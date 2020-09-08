import React from "react";
import c from "./Posts.module.scss";
import Post from "./Post/Post";

function Posts() {
  return (
    <div className={c.posts}>
      <Post />
    </div>
  );
}

export default Posts;
