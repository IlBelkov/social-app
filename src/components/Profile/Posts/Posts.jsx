import React from "react";
import c from "./Posts.module.scss";
import Post from "./Post/Post";

function Posts() {
  return (
    <div className={c.posts}>
      <textarea name='posts' className={c.posts__input}></textarea>
      <Post />
    </div>
  );
}

export default Posts;
