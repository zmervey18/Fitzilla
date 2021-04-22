
const WeeklyWorkout = ({workout}) => {

    return (
        <div>
            <h1>Weekly Workout Page</h1>
            <ul>{workout.map((exercise, index) => (<li key={index}>{exercise}</li>))}</ul>
        </div>
    )
}

export default WeeklyWorkout
