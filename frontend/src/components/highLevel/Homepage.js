import PropTypes from 'prop-types'
import { BrowserRouter as Router,Route, Switch, Link, Redirect } from 'react-router-dom'
import Button from '../lowLevel/Button'
import Login from './Login'
import Register from './Register'

const Homepage = ({buttonName}) => {
    return (
        
        <div>
            <h2>Welcome to Fitzilla</h2>
            
            <Link to="/login"><Button buttonName={'Login'} /></Link>             
            <Link to="/register"><Button buttonName={'Register'}/></Link>
        </div>
        
        
    )
}

export default Homepage