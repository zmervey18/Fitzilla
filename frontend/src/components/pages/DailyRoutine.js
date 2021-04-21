
import { Link } from 'react-router-dom';
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const DailyRoutine = ({onLength, onMuscle, fetchWorkout}) => {
    return (
        <div>
            <h2>Workout Length</h2>
            <p>Please select your workout length</p>
            <button onClick={(e) => onLength('Short')}>
                30 Min
            </button>
            <button onClick={(e) => onLength('Medium')}> 
                60 Min
            </button>
            <button onClick={(e) => onLength('Long')}>
                90 Min
            </button>

            <h2>Muscle Group</h2>
            <p>Please select up to two muscle groups</p>
            <button onClick={(e) => onMuscle('Arms')}>
                Arms
            </button>
            <button onClick={(e) => onMuscle('Back')}>
                Back
            </button>
            <button onClick={(e) => onMuscle('Chest')}>
                Chest
            </button>
            <button onClick={(e) => onMuscle('Legs')}>
                Legs
            </button>
            <button onClick={(e) => onMuscle('Triceps')}>
                Triceps
            </button>
            <button onClick={(e) => onMuscle('Biceps')}>
                Biceps
            </button>
            <button onClick={(e) => onMuscle('Shoulders')}>
                Shoulders
            </button>

            <Link to="/dailyworkout"><button onClick={fetchWorkout}>Your Exercises</button></Link>
        </div>
    )
}

export default DailyRoutine
