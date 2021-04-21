import { Link } from 'react-router-dom'
import Button from '../lowLevel/Button'

import "../../App.css"


const Homepage = () => {
    return (
        <div>
            <h2 className="pageTitles">Welcome to Fitzilla</h2>
            {/* <Link to="/login"><Button buttonName={'Login'} /></Link>             
            <Link to="/register"><Button buttonName={'Register'}/></Link> */}
            <Link to="/dailyweekly">
                <Button buttonName={'Generate Workout'}/>
            </Link>
        </div>
    
    )
}

export default Homepage