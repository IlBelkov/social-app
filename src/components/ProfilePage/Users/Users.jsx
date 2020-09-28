import React from "react";
import c from "./Users.module.scss";
import User from './User/User'

let Users = (props) => {
  debugger;
  let userItem = props.users.map(item => <User name={item.name} id={item.id} location={item.location} followed={item.followed} toggleFollow={props.toggleFollow} toggleUnfollow={props.toggleUnfollow}/>);
  return (
    <div className={c.users}>
      {userItem}
    </div>
  );
}

export default Users;
