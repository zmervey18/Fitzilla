import { useHistory } from 'react-router-dom';

const DailyRoutine = ({fetchWorkout}) => {
    let history = useHistory();
    let length = ''
    let muscle = [];
    const addMuscle = (i) => {
        if (muscle.length === 2) {
          muscle[1]=i;
        } else if (muscle.length <2) {
          muscle = [i, i];
        }
        console.log(muscle);
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        if (!length) {
            alert('Please select a workout length')
            return
        }
        if (muscle.length === 0) {
            alert('Please select at least one muscle group')
            return
        }
        fetchWorkout('daily',length,'',muscle)
        history.push({pathname: '/dailyworkout', state: muscle});
        length = '';
        muscle = [];
        
    }

    let buttonStyle = "btnMultiple" 
    const changeButtonStyle = (e) => {
        if (buttonStyle = "btnMultiple") {
            buttonStyle = "btnMultiple2"
            console.log('yes')
        } else {
            buttonStyle = "btnMultiple"
            
        }
        // console.log('yes')
    }

    return (
        <form className="pageTitles" onSubmit={onSubmit}>
            <div>
                <h1>Workout Length</h1>
                <p>Please select your workout length</p>
                <div className="btnMultiples">
                <input className="btnMultiple"   type='button' value={'30 Mins'}
                onClick={(e) => length='Short'} /> 

                <input className="btnMultiple" type='button' value={'60 Mins'}
                onClick={(e) => length='Medium'} />

                <input className="btnMultiple" type='button' value={'90 Mins'}
                onClick={(e) => length='Long'} />
                </div>
            </div> 

            <div>
                <h1>Muscle Group</h1>
                <p>Please select up to two muscle groups</p>
                <div className="btnMultiples">
                    <input className="btnMultiple" type='button' value={'Arms'}
                    onClick={(e) => addMuscle('Arms')} />

                    <input className="btnMultiple" type='button' value={'Back'}
                    onClick={(e) => addMuscle('Back')} />
                </div>

                <div className="btnMultiples">
                    <input className="btnMultiple" type='button' value={'Chest'}
                    onClick={(e) => addMuscle('Chest')} />

                    <input className="btnMultiple" type='button' value={'Legs'}
                    onClick={(e) => addMuscle('Legs')} />
                </div>

                <div className="btnMultiples">
                    <input className="btnMultiple" type='button' value={'Triceps'}
                    onClick={(e) => addMuscle('Triceps')} />

                    <input className="btnMultiple" type='button' value={'Biceps'}
                    onClick={(e) => addMuscle('Biceps')} />
                </div>

                <div className="btnMultiples">
                    <input className="btnMultiple" type='button' value={'Shoulders'}
                    onClick={(e) => addMuscle('Shoulders')} />
                </div>
                
                <input className="btn" type='submit' value='Create Workout' />
            </div>
        </form>
    )
}

export default DailyRoutine
