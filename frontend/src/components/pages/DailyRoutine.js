
import { Link } from 'react-router-dom';
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import "../../App.css"

const DailyRoutine = ({onLength, onMuscle, fetchWorkout}) => {
    return (
        <div>
            <h2 className="pageTitles">Workout Length</h2>
            <p className="pageTitles">Please select your workout length</p>
            <button className="btnMultiple" onClick={(e) => onLength('Short')}>
                30 Min
            </button>
            <button className="btnMultiple" onClick={(e) => onLength('Medium')}> 
                60 Min
            </button>
            <button className="btnMultiple" onClick={(e) => onLength('Long')}>
                90 Min
            </button>

            <h2 className="pageTitles">Muscle Group</h2>
            <p className="pageTitles">Please select up to two muscle groups</p>
            <button className="btnMultiple" onClick={(e) => onMuscle('Arms')}>
                Arms
            </button>
            <button className="btnMultiple" onClick={(e) => onMuscle('Back')}>
                Back
            </button>
            <button className="btnMultiple" onClick={(e) => onMuscle('Chest')}>
                Chest
            </button>
            <button className="btnMultiple" onClick={(e) => onMuscle('Legs')}>
                Legs
            </button>
            <button className="btnMultiple" onClick={(e) => onMuscle('Triceps')}>
                Triceps
            </button>
            <button className="btnMultiple" onClick={(e) => onMuscle('Biceps')}>
                Biceps
            </button>
            <button className="btnMultiple" onClick={(e) => onMuscle('Shoulders')}>
                Shoulders
            </button>

            <Link to="/dailyworkout"><button className="btnMultiple"  onClick={fetchWorkout}>Your Exercises</button></Link>
        </div>
    )
}

export default DailyRoutine
