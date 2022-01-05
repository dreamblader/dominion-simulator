import { Client, Lobby } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import { Simulator } from "./Game";
import Arena from "./Client/ui/pages/arena";
import "./Client/ui/styles/globals.css";
import { useState } from "react";

const SimulatorClient = Client({
  game: Simulator,
  board: Arena,
  //debug: false,
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
  const [playerID, setPlayerID] = useState(null);
  //const startGame = (playerID, deckID = 1) => {};

  if (playerID) {
    return <SimulatorClient playerID={playerID} deckID={1} />;
  } else {
    return (
      <div>
        <p>Play as</p>
        <button onClick={() => setPlayerID("0")}>Player 0</button>
        <button onClick={() => setPlayerID("1")}>Player 1</button>
      </div>
    );
  }
};

export default App;
