import React from "react";
import c from "./Posts.module.scss";
import Post from "./Post/Post";

var textarea = document.querySelector('textarea');

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

function Posts() {
  return (
    <div className={c.posts}>
      <textarea name='posts' className={c.posts__input}></textarea>
      <Post />
    </div>
  );
}

export default Posts;
