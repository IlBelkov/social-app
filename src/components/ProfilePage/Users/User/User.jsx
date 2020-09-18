import React from "react";
import c from "./User.module.scss";

let User = (props) => {
  let toggleFollow = () => {
    props.toggleFollow(props.id);
  }

  // let followReverse = () => {
  //   props.followReverse();
  // }

  return (
    <div className={c.user}>
      <div className={c.user__item}>
        <div className={c.user__name}>
          {props.name}
          <div className={c.user__followBtn}>
            <button onClick={toggleFollow}>{props.followed ? "follow" : "unfollow"}</button>
          </div>
        </div>
        <div className={c.user__location}>
          <div className={c.user__locationCity}>{props.location.city}</div>
          <div className={c.user__locationContry}>{props.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
