import React from "react";
import c from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";

let DialogsUsers = (props) => {
  return (
    <div className={c.dialogsUsers}>
      <NavLink to={`/message/${props.id}`} className={c.dialogsUsers__item} activeClassName={c.active}>{props.name}</NavLink>
    </div>
  );
}

let Dialogs = (props) => {
  let DialogsUsersItem = props.dialogs.map(item => <DialogsUsers name={item.name} id={item.id} />);

  return (
    <div className={c.dialogs}>
      {DialogsUsersItem}
    </div>
  );
}

export default Dialogs;
