import { Link } from 'react-router-dom';

import "../../App.css"

const WeeklyWorkout = ({workout, fetchWorkout}) => {

    return (
        <div>
            <h1 className="pageTitles">Weekly Workout Page</h1>
            <ul>{workout.map((exercise, index) => (<li key={index}>{exercise}</li>))}</ul>
            <Link to="/weeklyworkout"><button className="btn" onClick={()=>{console.log('hey')}}>refresh</button></Link>
        </div>
    )
}

export default WeeklyWorkout
