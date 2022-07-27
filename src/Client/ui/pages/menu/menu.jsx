import React, { useContext } from "react";
import Button from "../../components/general/button";
import { PageContext, pageActions } from "Client/context/page";
import "./style.css";

const MainMenu = () => {
  const { pageDispatch } = useContext(PageContext);

  console.log(process);

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
      <div className="bottom-bar">{`Version: ${process.version}`}</div>
    </div>
  );
};

//TODO add version

export default MainMenu;
