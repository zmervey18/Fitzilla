import Button from '../lowLevel/Button';
import { Link } from 'react-router-dom';

const DailyRoutine = ({onLength, onMuscle}) => {
    return (
        <div>
            <h2>Workout Length</h2>
            <p>Please select your workout length</p>
            <button onClick={(e) => onLength('short')}>
                30 Min
            </button>
            <button onClick={(e) => onLength('medium')}> 
                60 Min
            </button>
            <button onClick={(e) => onLength('long')}>
                90 Min
            </button>

            <h2>Muscle Group</h2>
            <p>Please select up to two muscle groups</p>
            <button onClick={(e) => onMuscle('arms')}>
                Arms
            </button>
            <button onClick={(e) => onMuscle('back')}>
                Back
            </button>
            <button onClick={(e) => onMuscle('chest')}>
                Chest
            </button>
            <button onClick={(e) => onMuscle('legs')}>
                Legs
            </button>
            <button onClick={(e) => onMuscle('triceps')}>
                Triceps
            </button>
            <button onClick={(e) => onMuscle('biceps')}>
                Biceps
            </button>
            <button onClick={(e) => onMuscle('shoulders')}>
                Shoulders
            </button>

            <Link to="/dailyworkout"><Button buttonName={'Your Exercises'}/></Link>
        </div>
    )
}

export default DailyRoutine
