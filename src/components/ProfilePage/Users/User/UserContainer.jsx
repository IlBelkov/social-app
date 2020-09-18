import User from "./User";
import {connect} from 'react-redux';
import { toggleFollow } from "../../../../redux/users-reducer";

const mapStoreToProps = (state) => {
  return {
    users: state.users,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: () => {
      dispatch(toggleFollow());
    },
  }
}

let UsersContainer = connect(mapStoreToProps,mapDispatchToProps)(User);

export default UsersContainer;