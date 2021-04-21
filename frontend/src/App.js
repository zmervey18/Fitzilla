import { BrowserRouter as Router, Route} from 'react-router-dom'
import {useState, useEffect} from "react"
import './App.css'

// Importing High Level Components
import Login from './components/pages/Login'
import Homepage from './components/pages/Homepage'
import Register from "./components/pages/Register"
import About from "./components/pages/About"
import Workout from "./components/pages/Workout"
import DailyWeekly from "./components/pages/DailyWeekly"
import DailyRoutine from "./components/pages/DailyRoutine"
import WeeklyRoutine from "./components/pages/WeeklyRoutine"
import WeeklyWorkout from './components/pages/WeeklyWorkout'

// Importing Low Level Components
import Footer from './components/lowLevel/Footer'
import Header from "./components/lowLevel/Header"



function App() {

  const [duration, setDuration] = useState('');
  const [length, setLength] = useState('');
  const [muscle, setMuscle]=useState([]);
  const [days, setDays] = useState('');

  
  const fetchWorkout = async (duration, length, days) => {
   
    if (duration === 'daily') {
      if(length === 'short')
      var respond = await fetch(`/${length}%20%2830%20mins%29`)
      var data=await respond.json()
      console.log(data)
      return data

      // if (length == 'short') {
      //   var workoutLength = '/Short%20%2830%20mins%29';
      // } else if (length == 'medium') {
      //   var workoutLength = '/Medium%20%281%20hour%29';
      // } else if (length == 'long') {
      //   var workoutLength = '/Long%20%281%20hour%2030%20mins%29';
      // }
      // var url = `/${workoutLength}/`;

    } else if (duration === 'weekly') {
       if (days !== '') {
          const respond = await fetch(`/${days}%20days`)
          const data = await respond.json()
          console.log(data)
          return data
       }
      
    }
  }

    useEffect(() => {
        fetchWorkout();
    }, [])

    useEffect (() => { 
      setDuration() 
    }, [])
  
  const addDuration = async (i) => {
    setDuration(i)
    console.log(duration)
  }
  const addLength = async (i) => {
    setLength(i)
  }
  const addMuscle = async (i) => {
    if (muscle.length === 2) {
      setMuscle([muscle[1],i])
    } else if (muscle.length ===1) {
    setMuscle([i, i])
    }
  }
  const addDays = async (i) => {
    setDays(i)
    fetchWorkout(duration, length, days)
  }

  return (
    <Router>
      <Header/>

      <Route exact path="/" component={Homepage}/>
      <Route exact path="/login" component={Login}/> 
      <Route exact path="/register" component={Register}/> 
      <Route exact path="/About" component={About}/> 
      <Route exact path="/workout" component={Workout}/>
      <Route 
        exact path="/dailyweekly"
        render={(props) => (
          <DailyWeekly {...props} 
          onDuration={addDuration} fetchWorkout={fetchWorkout} />
        )}
      />
      <Route 
        exact path="/dailyroutine"
        render={(props) => (
          <DailyRoutine {...props} 
          onLength={addLength} onMuscle={addMuscle} fetchWorkout={fetchWorkout}/>
        )}
      />
      <Route
        exact path="/weeklyroutine"
        render={(props) => (
          <WeeklyRoutine {...props} 
          onDays={addDays} fetchWorkout={fetchWorkout}/>
        )}
      />
      <Route
        exact path="/weeklyworkout"
        render={(props) => (
          <WeeklyWorkout {...props} 
          onFetchWorkout={fetchWorkout}/>
        )}
      />
      <Footer/>
    </Router>
  );
}

export default App;
