import React, { useContext } from "react";
import Button from "../../components/general/button";
import { PageContext, pageActions } from "Client/context/page";
import Consts from "utils/consts";
import { Logo, LogoAnimated } from "dreamblade-react-commons";
import "./style.css";

const MainMenu = () => {
  const { pageDispatch } = useContext(PageContext);

  return (
    <div className="main-menu">
      <div className="menu-block">
        <h1>Dimensional Dominions</h1>
        <h2>Card Game Simulator</h2>
      </div>
      <div className="menu-block">
        <Button
          click={() => {
            pageDispatch({ type: pageActions.GO_TO_GAME });
          }}
        >
          PLAY
        </Button>
        <Button
          click={() => {
            pageDispatch({ type: pageActions.GO_TO_RULES });
          }}
        >
          RULES
        </Button>
      </div>

      <div className="bottom-bar">
        <p>{`Version: ${process.env.REACT_APP_VERSION} - ${Consts.versionName}`}</p>{" "}
        <div className="brand">
          <p>Made By:</p>
          <LogoAnimated />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
