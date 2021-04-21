import {useEffect, useState} from "react"
import './App.css'


import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

// Importing High Level Components
import Login from './components/pages/Login'
import Homepage from './components/pages/Homepage'
import Register from "./components/pages/Register"
import About from "./components/pages/About"
import Workout from "./components/pages/Workout"
import DailyWeekly from "./components/pages/DailyWeekly"
import DailyRoutine from "./components/pages/DailyRoutine"
import WeeklyRoutine from "./components/pages/WeeklyRoutine"

// Importing Low Level Components
import Footer from './components/lowLevel/Footer'
import Header from "./components/lowLevel/Header"
import Button from "./components/lowLevel/Button"

function App() {
  const [duration, setDuration] = useState('');
  const [length, setLength] = useState('');
  const [days, setDays] = useState('');
  const [url, setUrl] = useState('');
  
  const getDuration = (i) => {
    setDuration(i)
    console.log(`Duration has been set to ${i}`)
  }
  
  const getWorkoutRoutine = () => {
    if (duration == 'daily') {
      if (length == 'short') {
        var workoutLength = 'Short%20%2830%20mins%29';
      } else if (length == 'medium') {
        var workoutLength = 'Medium%20%281%20hour%29';
      } else if (length == 'long') {
        var workoutLength = 'Long%20%281%20hour%2030%20mins%29';
      }
      var url = `/${workoutLength}/`;
    } else if (duration == 'weekly') {
      var url = `http://localhost:5000/${days}%20days`;
    }
    setUrl = url
  }
  

  return (
    <Router>
      <Header/>

      <Route exact path="/" component={Homepage}/>
      <Route exact path="/login" component={Login}/> 
      <Route exact path="/register" component={Register}/> 
      <Route exact path="/About" component={About}/> 
      <Route exact path="/workout" component={Workout}/>
      <Route exact path="/dailyweekly" component={DailyWeekly}/>
      <Route exact path="/dailyroutine" component={DailyRoutine}/>
      <Route exact path="/weeklyroutine" component={WeeklyRoutine}/>

      
      <Footer/>
    </Router>
   
  );
}

export default App;
