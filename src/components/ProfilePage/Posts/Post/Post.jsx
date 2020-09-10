import React from "react";
import c from "./Post.module.scss";

let Post = (props) => {
  return (
    <div className={c.post}>
      <div className={c.post__message}>
        {props.message}
      </div>
    </div>
  );
}

export default Post;
