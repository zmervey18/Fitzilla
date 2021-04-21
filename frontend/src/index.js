import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import {Router, hashHistory as history} from "react-router"


ReactDOM.render(
  
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
  
//   <Router routes={routes} history={history}/>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

