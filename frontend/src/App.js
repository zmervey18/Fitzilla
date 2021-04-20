import { BrowserRouter as Router, Route} from 'react-router-dom'
import {useState} from "react"

// Importing High Level Components
import Login from './components/pages/Login'
import Homepage from './components/pages/Homepage'
import Register from "./components/pages/Register"
import About from "./components/pages/About"
import Workout from "./components/pages/Workout"
import DailyWeekly from "./components/pages/DailyWeekly"

// Importing Low Level Components
import Footer from './components/lowLevel/Footer'
import Header from "./components/lowLevel/Header"


function App() {
  const [appDuration, setAppDuration] = useState('');
  // const [length, setLength] = useState('');
  // const [days, setDays] = useState('');
  // const [url, setUrl] = useState('');
  
  // const getWorkoutRoutine = () => {
  //   if (duration == 'daily') {
  //     if (length == 'short') {
  //       var workoutLength = 'Short%20%2830%20mins%29';
  //     } else if (length == 'medium') {
  //       var workoutLength = 'Medium%20%281%20hour%29';
  //     } else if (length == 'long') {
  //       var workoutLength = 'Long%20%281%20hour%2030%20mins%29';
  //     }
  //     var url = `/${workoutLength}/`;
  //   } else if (duration == 'weekly') {
  //     var url = `http://localhost:5000/${days}%20days`;
  //   }
  //   setUrl = url
  // }
  
  const addDuration = (i) => {
    console.log(`Componet duration in App: ${i['duration']}`)
    setAppDuration(i['duration'])
    console.log(`App Duration: ${appDuration}`)
    
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
          <DailyWeekly {...props} onDuration={addDuration} />
        )}
      />

      
      <Footer/>
    </Router>
   
  );
}

export default App;
