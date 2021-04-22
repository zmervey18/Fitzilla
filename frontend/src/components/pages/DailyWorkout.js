import "../../App.css"
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useHistory } from 'react-router-dom';

const DailyWorkout = ({workout}) => {
    let history = useHistory();
    const muscles=history.location.state

    const imagesDaily = {
        "Triceps":"https://tinyurl.com/2z7hruhd",
        'Biceps':'',
        'Shoulders':'',
        "Back":'',
        "Chest":'',
        "Legs":'',
        "Arms":'',
    };

    return (
        <div>
            <img src={imagesDaily[muscles[0]]}/>
            <h1 className="pageTitles">Daily Workout Page</h1>
            <ul>{workout.map((exercise, index) => (<li key={index}>{exercise}</li>))}</ul>
            <Link className="linkRemove" to='/dailyweekly'>
                <button className="btnMultiple">Create another workout ?</button>
            </Link>
        </div>
    )
}

export default DailyWorkout