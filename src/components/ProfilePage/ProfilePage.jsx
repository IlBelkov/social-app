import React from "react";
import c from "./ProfilePage.module.scss";
import Nav from "./Nav/Nav";
import Friends from './Friends/Friends'; 
import Messages from './Messages/Messages'; 
import Posts from './Posts/Posts'; 
import {Route} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";

const ProfilePage = (props) => {
  
  return (
    <div className={c.profilePage}>
      <div className={c.container}>
        <div className={c.profile__poster}>
          <img src="/images/bg.png" alt="bg-poster" className={c.poster}/>
        </div>
        <div className={c.section}>
          <div className={c.section__user}>
            <div className={c.section__coll}>
              <img src="/images/face.png" alt="ava" className={c.section__avatar}/>
              <div className={c.section__nav}><Nav /></div>
            </div>
            <div className={c.section__coll}>
              <div className={c.section__username}>
                <div className={c.section__online}>In darkness:</div>
                <div className={c.section__name}>Ilya Belkov</div>
              </div>
              <div className={c.section__popup}>
                <Route path='/Messages' render={() =>  <Dialogs dialogs={props.dialogs} />} /> 
              </div>
            </div>
          </div>
          <div className={c.section__content}>
            <Route path='/Profile' component={Posts} />
            <Route path='/Messages' component={Messages} />
            <Route path='/Friends' component={Friends} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
