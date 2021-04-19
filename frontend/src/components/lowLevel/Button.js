import PropTypes from 'prop-types'

const Button = ({buttonName, link}) => {
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
