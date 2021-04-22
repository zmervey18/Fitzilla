import Pagination from '../lowLevel/Pagination'

const WeeklyWorkout = ({workout}) => {

    return (
        <div>
            <h1>Weekly Workout Page</h1>
            <Pagination workout={workout} />
        </div>
    )
}

export default WeeklyWorkout
