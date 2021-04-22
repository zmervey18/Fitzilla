import { Link } from 'react-router-dom';

const WeeklyRoutine = ({onDays}) => {
    return (
        <form className="pageTitles">
            <h2>Number of Days</h2>
            <p>Please select your workout length</p>
            <Link className="linkRemove" to="/weeklyworkout" onClick={(e) => onDays('2')}>
                <button className="btnMultiple">
                    2 Days
                </button>
            </Link>
            <Link className="linkRemove" to="/weeklyworkout" onClick={(e) => onDays('3')}>
                <button className="btnMultiple">
                    3 Days
                </button>
            </Link>
            <Link className="linkRemove" to="/weeklyworkout" onClick={(e) => onDays('4')}>
                <button className="btnMultiple">
                    4 Days
                </button>
            </Link>
            <Link className="linkRemove" to="/weeklyworkout" onClick={(e) => onDays('6')}>
                <button className="btnMultiple">
                    6 Days
                </button>
            </Link>
        </form>
    )
}

export default WeeklyRoutine
