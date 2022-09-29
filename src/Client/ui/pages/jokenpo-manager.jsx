import React from "react";
import { JokenpoContext } from "Client/context/jokenpo-ctx";
import { GameResult } from "models/enums";
import Jokenpo from "../components/gameplay/jokenpo/jokenpo";
import WaitScreen from "../components/general/wait-screen/wait-screen";
import MenuSelectTurn from "../components/menus/menu-select-turn/menu-select-turn";

const JokenpoManager = () => {
  const { jokenpoState } = React.useContext(JokenpoContext);

  switch (jokenpoState.result) {
    case GameResult.WINNER:
      return <MenuSelectTurn />;
    case GameResult.LOSER:
      return <WaitScreen message={"Wait"} />;
    default:
      return <Jokenpo />;
  }
};

export default JokenpoManager;
