import React from 'react'
import { useState } from 'react'

import "../../App.css"

const Pagination = ({ workout }) => {
    
    const [currentDay, setCurrentDay] = useState(1)
    const [workoutsPerPage] = useState(6)

    //Setting the number of days as an empty array initially
    const dayNumbers = []

    //Getting the current number of workouts on one page
    const indexofLastDay = currentDay * workoutsPerPage;
    const indexofFirstDay = indexofLastDay - workoutsPerPage;
    const displayDay = workout.slice(indexofFirstDay, indexofLastDay)

    //Changing and loading new workouts per day. Is set to work onClick.
    const paginate = (dayNumbers) => setCurrentDay(dayNumbers)

    // Increasing index of day number. TotalWorkouts/workoutsPerPage
    for (let i = 1; i <= Math.ceil(workout.length / workoutsPerPage); i++) {
        dayNumbers.push(i)

    }
    //creating rendering the workouts for display
    const renderWorkouts = (workout) => {
        return (
            <ul>
                {displayDay.map((exercise, index) => {
                    return (
                        <li >
                            {exercise}
                        </li>
                    )
                })}
            </ul>
        )
    }
    //creating rendering the days for weekly workout display
    const renderDays = dayNumbers.map((number) => {
        return (
            <div>
                <li key={number} onClick={() => paginate(number)}
                    className={currentDay === number ? "active" : null}>
                    Day {number}
                </li>
            </div>
        )
    })

    return (
        <nav>
            <ul className="dayNumbers">
                {renderDays}
                {renderWorkouts(displayDay)}

            </ul>
        </nav>
    )
}

export default Pagination
