import React, { useState } from "react";
import Arena from "./arena/arena";
import { Simulator } from "Game";
import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import { getServer } from "utils/help";

const server = getServer();

const SimulatorClient = Client({
  game: Simulator,
  board: Arena,
  debug: false,
  multiplayer: SocketIO({ server: server }),
});

const Game = () => {
  const [playerID, setPlayerID] = useState(null);

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

export default Game;
