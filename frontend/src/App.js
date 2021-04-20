import React from "react"
import "./App.css"
import {useEffect, useState} from "react"


import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

// Importing High Level Components
import Login from './components/pages/Login'
import Homepage from './components/pages/Homepage'
import Register from "./components/pages/Register"
import About from "./components/pages/About"
import Workout from "./components/pages/Workout"

// Importing Low Level Components
import Footer from './components/lowLevel/Footer'
import Header from "./components/lowLevel/Header"
import Button from "./components/lowLevel/Button"

function App() {
  


  return (
    <Router>
      <Header/>

      <Route exact path="/" component={Homepage}/>
      <Route exact path="/login" component={Login}/> 
      <Route exact path="/register" component={Register}/> 
      <Route exact path="/About" component={About}/> 
      <Route exact path="/workout" component={Workout}/>

      <Link to="/workout"><Button buttonName={'Workout'}/></Link>
      <Footer/>
    </Router>
   
  );
}

export default App;
