import { useHistory } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { IconContext } from "react-icons";

const BackButton = () => {
  let history = useHistory();
  return (
    <div>
      <button className="icons" onClick={() => history.goBack()}>
        <IconContext.Provider value={{ color: "white" }}>
          <BiArrowBack />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default BackButton;
