// import React from "react";
import DialogsUsers from "./DialogsUsers";
import {connect} from 'react-redux';

const mapStoreToProps = (state) => {
  return {
    dialogsUsers: state.messages.dialogsUsers,
  }
};

let DialogsUsersContainer = connect(mapStoreToProps)(DialogsUsers);

export default DialogsUsersContainer;
