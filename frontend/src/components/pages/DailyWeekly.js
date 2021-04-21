import { Link } from 'react-router-dom';
import "../../App.css"

const DailyWeekly = ({onDuration, fetchWorkout}) => {

    return (
        <div>
            <Link to="/dailyroutine" onClick={(e) => onDuration('daily')}>
            <button className="btnMultiple">
                Daily Routine
            </button>
            </Link>
            <Link to="/weeklyroutine" onClick={(e) => onDuration('weekly')}>
            <button className="btnMultiple">
                Weekly Routine
            </button>
            </Link>
        </div>
    )
}

export default DailyWeekly
