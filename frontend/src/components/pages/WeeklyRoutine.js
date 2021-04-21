import { Link } from 'react-router-dom';

import "../../App.css"

const WeeklyRoutine = ({onDays, fetchWorkout}) => {
    return (
        <form>
            <h2 className="pageTitles">Number of Days</h2>
            <p className="pageTitles">Please select your workout length</p>
            <Link to="/weeklyworkout" onClick={(e) => onDays('2')}>
                <button className="btnMultiple">
                    2 Days
                </button>
            </Link>
            <Link to="/weeklyworkout" onClick={(e) => onDays('3')}>
                <button className="btnMultiple">
                    3 Days
                </button>
            </Link>
            <Link to="/weeklyworkout" onClick={(e) => onDays('4')}>
                <button className="btnMultiple">
                    4 Days
                </button>
            </Link>
            <Link to="/weeklyworkout" onClick={(e) => onDays('6')}>
                <button className="btnMultiple">
                    6 Days
                </button>
            </Link>


        </form>
    )
}

export default WeeklyRoutine
