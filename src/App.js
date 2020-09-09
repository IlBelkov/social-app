import React from 'react';
import "./App.scss";
import Header from './components/Header/Header';
import ProfilePage from './components/ProfilePage/ProfilePage';


function App(props) {
  return (
    <div className="App">
      <Header />
      <ProfilePage dialogs={props.dialogs}/>
    </div>
  );
}

export default App;
