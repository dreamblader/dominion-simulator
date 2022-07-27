import React, { useContext } from "react";
import Button from "../../components/general/button";
import { PageContext, pageActions } from "Client/context/page";

const MainMenu = () => {
  const { pageDispatch } = useContext(PageContext);

  return (
    <div>
      <h1>Dimensional Dominions</h1>
      <h2>Card Game Simulator</h2>
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
  );
};

export default MainMenu;
