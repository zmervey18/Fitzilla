import { Link } from 'react-router-dom';
import {useEffect} from 'react'

import "../../App.css"

export const DailyWorkout = ({workout, fetchWorkout}) => {

    useEffect(() => {
        fetchWorkout();
    }, [])
    return (
        <div>
            <h1 className="pageTitles">Daily Workout Page</h1>
            <ul>{workout.map((exercise, index) => (<li key={index}>{exercise}</li>))}</ul>
            <Link to="/dailyworkout"><button className="btn">Refresh</button></Link>
        </div>
    )
}

export default DailyWorkout