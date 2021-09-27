import { randomInt } from "../utils/help";
import Cards from "../models/card";
import BoardTile from "../models/board-tile";

export const setupDeck = (size, ctx) => {
  const deck = [];
  for (let i = 0; i < ctx.numPlayers; i++) {
    deck.push([]);
    for (let j = 0; j < size; j++) {
      deck[i].push(Cards(randomInt(100, ctx)));
    }
  }

  return deck;
};

export const setupProps = (players) => {
  const prop = [];
  for (let i = 0; i < players; i++) {
    prop.push([]);
  }
  return prop;
};

export const setupBoard = (board) => {
  return board.map((row) => row.map((tile) => BoardTile(tile)));
};
