import { connect } from "react-redux";
import { catchLanguage } from "../../redux/profile-reducer";
import Header from "./Header";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  };
}

const mapDispatchToProps = (dispatch) => {
  // debugger;
  return {
    catchLanguage: (language) => {
      debugger;
      let action = catchLanguage(language);
      dispatch(action);
    },
  }
}

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
