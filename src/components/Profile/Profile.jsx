import React from "react";
import c from "./Profile.module.scss";

function Profile() {
  return (
    <div className={c.profile}>
      <div className={c.container}>
        <div className={c.profile__poster}>
          <img src="/images/bg.png" alt="bg-poster" className={c.poster}/>
        </div>
        <div className={c.section}>
          <div className={c.section__avatar}>
            <img src="/images/face.png" alt="ava"/>
          </div>
          <div className={c.section__data}>
            <div className={c.section__online}>In darkness:</div>
            <div className={c.section__name}>Ilya Belkov</div>
          </div>
          <div className={c.section__posts}>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
