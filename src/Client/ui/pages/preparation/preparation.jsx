import React from "react";
import { GameContext } from "Client/context/game";
import JokenpoProvider from "Client/context/jokenpo-ctx";
import JokenpoManager from "../jokenpo-manager";
import "./preparation-style.css";

const Preparation = () => {
  const {
    myID,
    G: { jokenpo },
  } = React.useContext(GameContext);

  return (
    <JokenpoProvider result={jokenpo[myID].gameResult}>
      <JokenpoManager />
    </JokenpoProvider>
  );
};

export default Preparation;
