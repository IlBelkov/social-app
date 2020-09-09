import React from "react";
import c from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className={c.nav}>
      <div className={c.nav__link} >
        <NavLink to="/Profile" className={c.link}>Profile</NavLink>
      </div>
      <div className={c.nav__link}>
        <NavLink to="/Messages" className={c.link}>Messages</NavLink>
      </div>
      <div className={c.nav__link}>
        <NavLink to="/Friends" className={c.link}>Friends</NavLink>
      </div>
    </div>
  );
}

export default Nav;
