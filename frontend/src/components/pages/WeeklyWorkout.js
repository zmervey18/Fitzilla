import { Link } from 'react-router-dom';

const WeeklyWorkout = ({workout, fetchWorkout}) => {

    return (
        <div>
            <h1>Weekly Workout Page</h1>
            <ul>{workout.map((exercise, index) => (<li key={index}>{exercise}</li>))}</ul>
            <Link to="/weeklyworkout"><button onClick={()=>{console.log('hey')}}>refresh</button></Link>
        </div>
    )
}

export default WeeklyWorkout
