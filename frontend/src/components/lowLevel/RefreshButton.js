import { useHistory } from "react-router-dom";

const RefreshButton = () => {
  function Home() {
    const history = useHistory();
    return (
      <button onClick={() => history.push("/weeklyworkout")}>Profile</button>
    );
  }

  return <div></div>;
};

export default RefreshButton;
