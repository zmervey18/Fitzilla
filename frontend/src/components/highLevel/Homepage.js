import PropTypes from 'prop-types'
import Button from '../lowLevel/Button'

const Homepage = ({buttonName}) => {
    return (
        <div>
            <h1>Welcome to Fitzilla</h1>
            <Button buttonName={'Login'} />           
            <Button buttonName={'Register'}/>
        </div>
    )
}

export default Homepage