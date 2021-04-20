import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../lowLevel/Button'
import Login from './Login'
import Register from './Register'
import DailyWeekly from './DailyWeekly'

const Homepage = ({buttonName}) => {
    return (
        <div>
            <h2>Welcome to Fitzilla</h2>
            {/* <Link to="/login"><Button buttonName={'Login'} /></Link>             
            <Link to="/register"><Button buttonName={'Register'}/></Link> */}
            <Link to="/dailyweekly"><Button buttonName={'Generate Workout'}/></Link>
        </div>
    
    )
}

export default Homepage