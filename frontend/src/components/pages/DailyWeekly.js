import {useState} from "react"

const DailyWeekly = ({onDuration}) => {
    const [duration, setDuration] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(`Component Duration: ${duration}`)
        onDuration({duration})
    }

    return (
        // Add links to other pages...
        <form onSubmit={onSubmit}>
            <button 
            type='submit'
            value='daily'
            onClick={(e) => setDuration(e.target.value)}>
                Daily Routine
            </button>
            <button
            type='submit'
            value='weekly'
            onClick={(e) => setDuration(e.target.value)}>
                Weekly Routine
            </button>
        </form>
    )
}

export default DailyWeekly
