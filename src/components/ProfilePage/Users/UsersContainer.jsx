import Users from "./Users";
import {connect} from 'react-redux';
import { toggleFollow } from "../../../redux/users-reducer";

const mapStoreToProps = (state) => {
  return {
    users: state.users,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (id) => {
      dispatch(toggleFollow(id));
    },
  }
}

let UsersContainer = connect(mapStoreToProps,mapDispatchToProps)(Users);

export default UsersContainer;
