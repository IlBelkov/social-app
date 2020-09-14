import React from "react";
import { addPostAction, updatePostAction } from "../../../redux/profile-reducer";
import Posts from "./Posts";

let PostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    let action = addPostAction();
    props.store.dispatch(action);
  }

  let onPostChange = (text) => {
    let action = updatePostAction(text);
    props.store.dispatch(action);
  }

  return <Posts onPostChange={onPostChange} addPost={addPost} newPostText = {state.profilePage.newPostText} posts={state.profilePage.posts}/>
}

export default PostsContainer;
