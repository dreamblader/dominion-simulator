import { Client, Lobby } from "boardgame.io/react";
import { Simulator } from "./Game";
import Arena from "./Client/ui/pages/arena";
import { useState } from "react";
import MainMenu from "Client/ui/pages/menu";
import Game from "Client/ui/pages/game";
import Rules from "Client/ui/pages/rules";
import "./Client/ui/styles/globals.css";
import "./Client/ui/styles/responsive.css";

const lobby = (
  <Lobby
    gameServer={`https://${window.location.hostname}:8000`}
    lobbyServer={`https://${window.location.hostname}:8000`}
    gameComponents={[{ game: Simulator, board: Arena }]}
  />
);

const App = () => {
  const [menuSelect, setMenuSelect] = useState(0);

  const reset = () => {
    setMenuSelect(0);
  };

  switch (menuSelect) {
    default:
    case 0:
      return <MainMenu setMenu={setMenuSelect} />;
    case 1:
      return <Game />;
    case 2:
      return <Rules reset={reset} />;
  }
};

export default App;
