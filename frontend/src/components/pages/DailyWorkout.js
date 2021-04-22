import "../../App.css"
const DailyWorkout = ({workout}) => {
    
    return (
        <div>
            <h1 className="pageTitles">Daily Workout Page</h1>
            <ul>{workout.map((exercise, index) => (<li key={index}>{exercise}</li>))}</ul>
        </div>
    )
}

export default DailyWorkout