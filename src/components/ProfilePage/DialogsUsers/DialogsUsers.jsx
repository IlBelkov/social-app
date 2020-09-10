import React from "react";
import c from "./DialogsUsers.module.scss";
import DialogsUsersItem from './DialogsUsersItem/DialogsUsersItem'

let DialogsUsers = (props) => {
  let DialogsUsersData = props.dialogsUsers.map(item => <DialogsUsersItem name={item.name} id={item.id} />);

  return (
    <div className={c.dialogs}>
      {DialogsUsersData}
    </div>
  );
}

export default DialogsUsers;
