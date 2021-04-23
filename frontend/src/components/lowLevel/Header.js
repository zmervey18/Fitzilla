import React from "react";
import { BiRun } from "react-icons/bi";
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";

import logo from "../../Animals-Dinosaur-icon.png";

const Header = (props) => {
  if (props.location.pathname === "/") {
    return (
      <header className="header">
        <h1>
          <img className="imgControl2" src={logo} />
          itzilla
        </h1>
      </header>
    );
  }
  return (
    <header className="header">
      <HomeButton className="icons" />
      <h1 className="pageTitles">
        <img className="imgControl" src={logo} />
        itzilla
      </h1>
      <BackButton className="icons" />
    </header>
  );
};

export default Header;
