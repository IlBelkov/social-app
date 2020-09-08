import React from 'react';
import "./App.scss";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Nav />
    </div>
  );
}

export default App;
