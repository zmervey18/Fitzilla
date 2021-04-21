import Button from '../lowLevel/Button';
import {Link} from 'react-router-dom';


const DailyRoutine = () => {
    return (
        <div>
            <h2>Workout Length</h2>
            <p>Please select your workout length</p>
            <h3>30 Min</h3>
            <h3>60 Min</h3>
            <h3>90 Min</h3>

            <h2>Muscle Group</h2>
            <p>Please select up to two muscle groups</p>
            <h3>Arms</h3>
            <h3>Back</h3>
            <h3>Chest</h3>
            <h3>Legs</h3>
            <h3>Triceps</h3>
            <h3>Biceps</h3>
            <h3>Shoulder</h3>

            <Link to="/dailyworkout"><Button buttonName={'Your Exercises'}/></Link>

            




        </div>
    )
}

export default DailyRoutine
