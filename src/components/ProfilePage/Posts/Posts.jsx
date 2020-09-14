import React from "react";
import c from "./Posts.module.scss";
import Post from "./Post/Post";

// var textarea = document.querySelector('textarea');

// textarea.addEventListener('keydown', autosize);

// function autosize(){
//   var el = this;
//   setTimeout(function(){
//     el.style.cssText = 'height:auto; padding:0';
//     // for box-sizing other than "content-box" use:
//     // el.style.cssText = '-moz-box-sizing:content-box';
//     el.style.cssText = 'height:' + el.scrollHeight + 'px';
//   },0);
// }

let Posts = (props) => {
  let postsItem = props.posts
    .map((post) => <Post id={post.id} message={post.message} />)
    .reverse();

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  };

  return (
    <div className={c.posts}>
      <textarea
        className={c.posts__input}
        ref={newPostElement}
        value={props.newPostText}
        onChange={onPostChange}
      />
      <button onClick={addPost}>Send</button>

      <div className={c.posts__block}>{postsItem}</div>
    </div>
  );
};

export default Posts;
