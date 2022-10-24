import React, { useState } from "react";
import Board from "./board/board";
import { Simulator } from "Game";
import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import { getServer } from "utils/help";

const server = getServer();

const SimulatorClient = Client({
  game: Simulator,
  board: Board,
  debug: false,
  multiplayer: SocketIO({ server: server }),
});

const Game = () => {
  const [playerID, setPlayerID] = useState(null);

  if (playerID) {
    return <SimulatorClient playerID={playerID} deckID={1} />;
  } else {
    return (
      <div className="center">
        <p>Play as</p>
        <button onClick={() => setPlayerID("0")}>Player 0</button>
        <button onClick={() => setPlayerID("1")}>Player 1</button>
      </div>
    );
  }
};

export default Game;
