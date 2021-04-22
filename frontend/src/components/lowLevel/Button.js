import PropTypes from 'prop-types'

const Button = ({buttonName}) => {
    return (
        <div>
            <button className="btn">
                {buttonName}
            </button>            
        </div>
    )
}

Button.propTypes = {
    buttonName: PropTypes.string
}

export default Button
