import React from "react";
import c from "./User.module.scss";
import * as axios from "axios";


class User extends React.Component {

  constructor(props){
    super(props);
    debugger;
    axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
      .then(response => {
         this.props.setUsers(response.data.items)
      })
    }



  toggleFollow = () => {
    this.props.toggleFollow(this.props.id);
  }
  // let toggleUnfollow = () => {
  //   props.toggleUnfollow(props.id);s
  // }

  // let followReverse = () => {
  //   props.followReverse();
  // }
  render() {
    return (
      <div className={c.user}>
        <div className={c.user__item}>
          <div className={c.user__name}>
            {this.props.name}
            <div className={c.user__followBtn}>
              <button onClick={this.toggleFollow}>{this.props.followed ? "follow" : "unfollow"}</button>
              {/* {props.followed ? <button onClick={toggleFollow}>follow</button> : <button onClick={toggleUnfollow}>unfollow</button>} */}
            </div>
          </div>
          <div className={c.user__location}>
            {/* <div className={c.user__locationCity}>{this.props.location.city}</div>
            <div className={c.user__locationContry}>{this.props.location.country}</div> */}
          </div>
        </div>
      </div>
    );
  }
};

export default User;
