import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import App from './App';
import * as serviceWorker from './serviceWorker';
import "typeface-roboto";
import { BrowserRouter } from 'react-router-dom';

let dialogs = [
  {name: 'Ilya', id: '1'},
  {name: 'Vlad', id: '2'},
  {name: 'Jenya', id: '3'},
  {name: 'Elya', id: '4'},
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App dialogs={dialogs}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
