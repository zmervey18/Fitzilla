
const DailyWorkout = ({workout}) => {
    
    return (
        <div>
            <h1>Daily Workout Page</h1>
            <ul>{workout.map((exercise, index) => (<li key={index}>{exercise}</li>))}</ul>
        </div>
    )
}

export default DailyWorkout