import React from "react";
import c from "./Header.module.scss";

function Header(props) {
  // debugger;
  const changeLanguage = (language) => {
    props.catchLanguage(language);
  }

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
          <button onClick={()=>changeLanguage('en')}>En</button>
          <button onClick={()=>changeLanguage('ru')}>Ru</button>
          <button onClick={()=>changeLanguage('de')}>De</button>
          <div className={c.header__name}>Ilya Belkov</div>
        </div>
      </div>
    </div>
  
  );
}

export default Header;
