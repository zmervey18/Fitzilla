import React from "react"
import "./App.css"

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

// Importing High Level Components
import Login from './components/highLevel/Login'
import Homepage from './components/highLevel/Homepage'
import Register from "./components/highLevel/Register"
import About from "./components/highLevel/About"

// Importing Low Level Components
import Footer from './components/lowLevel/Footer'
import Header from "./components/lowLevel/Header"

function App() {
  return (
    <Router>
      <Header/>

      <Route exact path="/" component={Homepage}/>
      <Route exact path="/login" component={Login}/> 
      <Route exact path="/register" component={Register}/> 
      <Route exact path="/About" component={About}/> 

      <Footer/>
    </Router>
   
  );
}

export default App;
