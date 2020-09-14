import React from "react";
import DialogsUsers from "./DialogsUsers";

let DialogsUsersContainer = (props) => {
  let state = props.store.getState();
  return (
    <DialogsUsers dialogsUsers = {state.messages.dialogsUsers}/>
  );
}

export default DialogsUsersContainer;
