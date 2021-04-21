import { BrowserRouter as Router, Route} from 'react-router-dom'
import React, {useEffect, useState} from "react"
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
import DailyWorkout from './components/pages/DailyWorkout'

// Importing Low Level Components
import Footer from './components/lowLevel/Footer'
import Header from "./components/lowLevel/Header"



function App() {

  let duration = '';
  let length = '';
  let muscle = []; 
  let days = '';
  const [workout, setWorkout] = useState([])

  // if (length == 'short') {
  //       var workoutLength = 'Short%20%2830%20mins%29';
  //     } else if (length == 'medium') {
  //       var workoutLength = 'Medium%20%281%20hour%29';
  //     } else if (length == 'long') {
  //       var workoutLength = 'Long%20%281%20hour%2030%20mins%29';

 

  const fetchWorkout= async (duration, length, days, muscle)=> {
    console.log(duration, length, days, muscle)
    if (duration === 'daily') {

      if(length === 'Short'){

        if(muscle !== []){
          let respond = await fetch(`/${length}%20%2830%20mins%29/${muscle[0]}/${muscle[1]}`)
          //console.log('url:', respond)
          let data=await respond.json()
          console.log(data)
          setWorkout(data);
        }
      }
      if(length === 'Medium'){

        if(muscle !== []){
          let respond = await fetch(`/${length}%20%281%20hour%29/${muscle[0]}/${muscle[1]}`)
          //console.log('url:', respond)
          let data=await respond.json()
          console.log(data)
          setWorkout(data);
        }
    }
      if(length === 'Long'){

        if(muscle !== []){
          let respond = await fetch(`/${length}%20%281%20hour%2030%20mins%29/${muscle[0]}/${muscle[1]}`)
          //console.log('url:', respond)
          let data=await respond.json()
          console.log(data)
          setWorkout(data);
        }
    }

    } else if (duration === 'weekly') {
       if (days !== '') {
          let respond = await fetch(`/${days}%20days`);
          let data = await respond.json();
          console.log(data);
          setWorkout(data);
       }
      
    }
  }
 

    // useEffect(() => {
    //     fetchWorkout();
    // }, [])
  
    const addDuration = (i) => {
      duration = i;
      console.log(duration);
    }
    const addLength = (i) => {
      length = i;
      console.log(length);
    }
    const addMuscle = (i) => {
      if (muscle.length === 2) {
        muscle = [muscle[1],i];
        // fetchWorkout(duration, length, days, muscle);
        console.log(muscle);
      } else if (muscle.length <=1) {
        muscle = [i, i];
        //fetchWorkout(duration, length, days, muscle);
        console.log(muscle);
      }
      
    }
    const addDays = (i) => {
      days = i;
      fetchWorkout(duration, length, days, muscle);
      console.log(days);
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
        workout={workout} fetchWorkout={fetchWorkout}/>
        )}
      />
      <Route
        exact path="/dailyworkout"
        render={(props) => (
          <DailyWorkout {...props} 
        workout={workout} fetchWorkout={fetchWorkout}/>
        )}
      />
      <Footer/>
    </Router>
  );
}

export default App;
