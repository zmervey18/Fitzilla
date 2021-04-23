import "../../App.css"
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const DailyWorkout = ({workout}) => {
    let history = useHistory();
    const muscles=history.location.state

    const imagesDaily = {
        "Triceps":"https://tinyurl.com/2z7hruhd",
        'Biceps':'https://tinyurl.com/3cr4e9mt',
        'Shoulders':'https://tinyurl.com/9k5z5d97',
        "Back":'https://tinyurl.com/2sus522j',
        "Chest":'https://tinyurl.com/3bvvvj6s',
        "Legs":'https://tinyurl.com/yyh57k59',
        "Arms":'https://tinyurl.com/xu9ap9e2',
    };

    return (
        <div>
            <h1 className="pageTitles">Daily Workout</h1>

            <img className="imgControl3" src={imagesDaily[muscles[0]]} alt="workout" />
            
            <ul className="containerList">{workout.map((exercise, index) => (<li className="listRemove" key={index}>{exercise}</li>))}</ul>
            
            <Link className="linkRemove" to='/dailyweekly'>
                <button className="btnMultiple">Create Another Workout</button>
            </Link>
        </div>
    )
}

export default DailyWorkout