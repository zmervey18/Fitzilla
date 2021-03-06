import { Link } from "react-router-dom";
import Button from "../lowLevel/Button";

const Homepage = ({ buttonName }) => {
  return (
    <div>
      <h1 className="pageTitles">Welcome to Fitzilla</h1>
      {/* <Link to="/login"><Button buttonName={'Login'} /></Link>             
            <Link to="/register"><Button buttonName={'Register'}/></Link> */}
      <Link className="linkRemove" to="/dailyweekly">
        <Button buttonName={"Generate Workout"} />
      </Link>
    </div>
  );
};

export default Homepage;
