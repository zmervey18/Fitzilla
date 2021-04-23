import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { IconContext } from "react-icons";

const HomeButton = () => {
  return (
    <div>
      <Link to="/">
        <button className="icons">
          <IconContext.Provider value={{ color: "white" }}>
            <BiHomeAlt />
          </IconContext.Provider>
        </button>
      </Link>
    </div>
  );
};
export default HomeButton;
