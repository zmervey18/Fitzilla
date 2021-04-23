import Pagination from "../lowLevel/Pagination";
import { Link, useHistory } from "react-router-dom";

const WeeklyWorkout = ({ workout }) => {
  let history = useHistory();
  const day = history.location.state;

  return (
    <div>
      <h1 className="pageTitles">Weekly Workout</h1>
      <Pagination workout={workout} />
      <Link className="linkRemove btnMultiples" to="/dailyweekly">
        <button className="btnMultiple">Create Another Workout</button>
      </Link>
    </div>
  );
};

export default WeeklyWorkout;
