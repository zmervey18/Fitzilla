import Button from '../lowLevel/Button';
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react"




const WeeklyRoutine = () => {
    const [days, setDays]=useState([])
    const url = 'http://127.0.0.1:5000/2%20days';

    const fetchWeekly=async()=> {
    try{
        const response=await fetch(url);
        const days=await response.json();
        setDays(days);
        
    }catch (error){
        console.log(error);
    }
  };
    useEffect(() => {
        fetchWeekly();
  }, [])

    return (
        <div>
            <h2>Number of Days</h2>
            <p>Please select your workout length</p>
            <Button buttonName={'2 Days'} onClick={days}/>
            <Button buttonName={'3 Days'}/>
            <Button buttonName={'4 Days'}/>
            <Button buttonName={'6 Days'}/>
            

            <Link to="/weeklyworkout"><Button buttonName={'Your Exercises'}/></Link>


        </div>
    )
}

export default WeeklyRoutine
