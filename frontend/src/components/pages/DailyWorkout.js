import { Link } from 'react-router-dom';
import {useEffect} from 'react'

export const DailyWorkout = ({workout, fetchWorkout}) => {

    useEffect(() => {
        fetchWorkout();
    }, [])
    return (
        <div>
            <h1>Daily Workout Page</h1>
            <ul>{workout.map((exercise, index) => (<li key={index}>{exercise}</li>))}</ul>
            <Link to="/dailyworkout"><button>refresh</button></Link>
        </div>
    )
}

export default DailyWorkout