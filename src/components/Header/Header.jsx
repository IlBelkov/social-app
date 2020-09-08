import React from "react";
import c from "./Header.module.scss";

function Header() {
  return (
    <div className={c.header}>
      <div className={c.container}>
        <div className={c.header__logo}>
          <img
            src="/images/logo.png"
            alt="logo"
            className={c.logo}
          />
        </div>
        <div className={c.header__profile}>
          <div className={c.header__name}>Ilya Belkov</div>
        </div>
      </div>
    </div>
  
  );
}

export default Header;
