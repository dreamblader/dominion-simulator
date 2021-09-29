import { Client, Lobby } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import { Simulator } from "./Game";
import Arena from "./ui/pages/arena";
import "./ui/styles/globals.css";
import { useState } from "react";

const SimulatorClient = Client({
  game: Simulator,
  board: Arena,
  debug: false,
  multiplayer: SocketIO({ server: "localhost:8000" }),
});

const lobby = (
  <Lobby
    gameServer={`https://${window.location.hostname}:8000`}
    lobbyServer={`https://${window.location.hostname}:8000`}
    gameComponents={[{ game: Simulator, board: Arena }]}
  />
);

const App = () => {
  let { playerID, setPlayerID } = useState(null);

  if (playerID) {
    return <SimulatorClient playerID={playerID} />;
  } else {
    return lobby;
  }
};

export default App;
