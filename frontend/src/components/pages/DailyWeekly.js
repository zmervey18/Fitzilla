import Button from '../lowLevel/Button';
import {Link} from 'react-router-dom';

const DailyWeekly = () => {
    return (
        <div>
            <Link to="/dailyroutine">
            <Button buttonName={'Daily Routine'} />
            </Link>             
            <Link to="/weeklyroutine">
            <Button buttonName={'Weekly Routine'}/>
            </Link>
        </div>
    )
}

export default DailyWeekly
