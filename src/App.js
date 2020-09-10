import React from 'react';
import "./App.scss";
import Header from './components/Header/Header';
import ProfilePage from './components/ProfilePage/ProfilePage';

let  App = (props) => {
  return (
    <div className="App">
      <Header />
      <ProfilePage state={props.state} dispatch={props.dispatch}/>
    </div>
  );
}

export default App;
