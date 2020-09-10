import React from "react";
import c from "./Posts.module.scss";
import Post from "./Post/Post";
import {addPostAction} from '../../../redux/state';
import {updatePostAction} from '../../../redux/state';

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
  let postsItem = props.profilePage.posts.map(post => <Post id={post.id} message={post.message} />).reverse();

  let newPostElement = React.createRef();

  let addPost = () => {
    let action = addPostAction();
    props.dispatch(action);
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updatePostAction(text);
    props.dispatch(action);
  }

  return (
    <div className={c.posts}>
      <textarea className={c.posts__input} ref={newPostElement} value={props.profilePage.newPostText} onChange={onPostChange}/>
      <button onClick={addPost}>Send</button>
      
      <div className={c.posts__block}>
        {postsItem}
      </div>
    </div>
  );
}

export default Posts;
