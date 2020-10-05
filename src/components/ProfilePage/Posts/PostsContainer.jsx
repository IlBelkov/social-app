import { connect } from "react-redux";
import { addPostAction, updatePostAction } from "../../../redux/profile-reducer";
import Posts from "./Posts";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  };
}

const mapDispatchToProps = (dispatch) => {

  return {
    addPost: () => {
      let action = addPostAction();
      dispatch(action);
    },
    onPostChange: (text) => {
      let action = updatePostAction(text);
      dispatch(action);
    },
  }
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
