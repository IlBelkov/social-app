import React from "react";
import c from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className={c.nav}>
      <div className={c.nav__link}>
        <NavLink to="/Posts" className={c.link}>Profile</NavLink>
      </div>
      <div className={c.nav__link}>
        <NavLink to="/Message" className={c.link}>Message</NavLink>
      </div>
      <div className={c.nav__link}>
        <NavLink to="/Friends" className={c.link}>Friends</NavLink>
      </div>
    </div>
  );
}

export default Nav;
