import { connect } from "react-redux";
import ProfilePage from "./ProfilePage";

const mapStateToProps = (state) => {

  console.log( state.profilePage.language)
  return {
    language: state.profilePage.language,
  };
}


let ProfilePageContainer = connect(mapStateToProps)(ProfilePage);

export default ProfilePageContainer;
