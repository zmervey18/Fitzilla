import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const WeeklyRoutine = ({ fetchWorkout }) => {
  var days = "";
  let history = useHistory();

  const addDays = (i) => {
    days = i;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!days) {
      alert("Please select a workout length");
      return;
    }
    fetchWorkout("weekly", "", days, []);
    history.push({ pathname: "/weeklyworkout", state: days });
    console.log(days);
    days = "";
  };

  return (
    <form className="pageTitles" onSubmit={onSubmit}>
      <h2>Number of Days</h2>
      <p>Please select your workout length</p>

      <div>
        <input
          className="btnMultiple"
          type="button"
          value={"2 Days"}
          onClick={(e) => addDays("2")}
        />

        <input
          className="btnMultiple"
          type="button"
          value={"3 Days"}
          onClick={(e) => addDays("3")}
        />

        <input
          className="btnMultiple"
          type="button"
          value={"4 Days"}
          onClick={(e) => addDays("4")}
        />

        <input
          className="btnMultiple"
          type="button"
          value={"6 Days"}
          onClick={(e) => addDays("6")}
        />

        <input className="btn" type="submit" value="Create Workout" />
      </div>
    </form>
  );
};

export default WeeklyRoutine;
