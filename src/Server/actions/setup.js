import Deck from "../../models/game-pieces/deck";
import BoardTile from "../../models/game-pieces/board-tile";

export const setupDeck = (ctx, setupData) => {
  console.log("Setup Data: " + setupData);
  const deck = [];
  for (let i = 0; i < ctx.numPlayers; i++) {
    deck.push(Deck());
  }
  return deck;
};

export const setupProps = (players, content) => {
  const prop = [];
  for (let i = 0; i < players; i++) {
    prop.push(content);
  }
  return prop;
};

export const setupBoard = (board) => {
  return board.map((row, y) => row.map((tile, x) => BoardTile(tile, x, y)));
};
