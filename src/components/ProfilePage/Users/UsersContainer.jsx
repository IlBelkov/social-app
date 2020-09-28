import Users from "./Users";
import {connect} from 'react-redux';
import { follow } from "../../../redux/users-reducer";

const mapStoreToProps = (state) => {
  return {
    users: state.users.users,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (id) => {
      dispatch(follow(id));
    },
    // toggleUnfollow: (id) => {
    //   dispatch(unfollow(id));
    // },
  }
}

let UsersContainer = connect(mapStoreToProps,mapDispatchToProps)(Users);

export default UsersContainer;
