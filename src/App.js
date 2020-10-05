import React from 'react';
import "./App.scss";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';

let App = (props) => {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <div className="App">
        <HeaderContainer />
        <ProfilePageContainer />
      </div>
    );
  } else {
    return (
      <div className="App">
        <HeaderContainer />
        <Login />
      </div>
    );
  }

}

export default App;
