import React from "react";
import c from "./Profile.module.scss";
import Nav from "./Nav/Nav";
import Posts from "./Posts/Posts";
import Friends from './Friends/Friends'; 
import Message from './Message/Message'; 
import {Route} from "react-router-dom";

function Profile() {
  return (
    <div className={c.profile}>
      <div className={c.container}>
        <div className={c.profile__poster}>
          <img src="/images/bg.png" alt="bg-poster" className={c.poster}/>
        </div>
        <div className={c.section}>
          <div className={c.section__profile}>
            <img src="/images/face.png" alt="ava" className={c.section__avatar}/>
            <div className={c.section__nav}><Nav /></div>
          </div>
          <div className={c.section__coll}>
            <div className={c.section__username}>
              <div className={c.section__online}>In darkness:</div>
              <div className={c.section__name}>Ilya Belkov</div>
            </div>
            <div className={c.section__popup}>
            </div>
          </div>
          <div className={c.section__coll}>
            <Route path='/Posts' component={Posts} />
            <Route path='/Message' component={Message} />
            <Route path='/Friends' component={Friends} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
