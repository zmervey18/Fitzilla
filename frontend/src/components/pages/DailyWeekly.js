import { Link } from "react-router-dom";

const DailyWeekly = ({ onDuration, fetchWorkout }) => {
  return (
    <div>
      <Link
        className="linkRemove"
        to="/dailyroutine"
        onClick={(e) => onDuration("daily")}
      >
        <button className="btnMultiple">Daily Routine</button>
      </Link>
      <Link
        className="linkRemove"
        to="/weeklyroutine"
        onClick={(e) => onDuration("weekly")}
      >
        <button className="btnMultiple">Weekly Routine</button>
      </Link>
    </div>
  );
};

export default DailyWeekly;
