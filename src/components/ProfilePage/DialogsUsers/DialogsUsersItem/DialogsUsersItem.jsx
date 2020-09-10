import React from "react";
import c from "./DialogsUsersItem.module.scss";
import { NavLink } from "react-router-dom";

let DialogsUsersItem = (props) => {
  return (
    <div className={c.dialogsUsers}>
      <NavLink to={`/Messages/${props.id}`} className={c.dialogsUsers__item} activeClassName={c.active}>{props.name}</NavLink>
    </div>
  );
}

export default DialogsUsersItem;
