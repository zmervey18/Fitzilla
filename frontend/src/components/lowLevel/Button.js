import PropTypes from 'prop-types'

const Button = ({buttonName}) => {
    return (
        <div>
            <button>
                {buttonName}
            </button>            
        </div>
    )
}

Button.propTypes = {
    buttonName: PropTypes.string
}

export default Button
