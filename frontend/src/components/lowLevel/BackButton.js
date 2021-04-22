import {useHistory} from 'react-router-dom';

const BackButton = () => {
    let history = useHistory();
    return (
        <div>
            <button  onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default BackButton
