import { moveToArray, toBoard } from "../utils/help";
import { shuffleDeck } from "./deck";

export const spawnFaceUp = (G, ctx, index, cordY, cordX) => {
  let place = { x: cordX, y: cordY };
  toBoard(G, G.hand[ctx.currentPlayer], index, place);
};

export const spawnFaceDown = (G, ctx, index) => {};

export const backToTopDeck = (G, ctx, index) => {
  moveToArray(G.hand[ctx.currentPlayer], G.deck[ctx.currentPlayer], index);
};

export const backToBottomDeck = (G, ctx, index) => {
  moveToArray(
    G.hand[ctx.currentPlayer],
    G.deck[ctx.currentPlayer],
    index,
    true
  );
};

export const backToDeck = (G, ctx, index) => {
  moveToArray(G.hand[ctx.currentPlayer], G.deck[ctx.currentPlayer], index);
  shuffleDeck(G, ctx);
};

export const destroy = (G, ctx, index) => {
  moveToArray(
    G.hand[ctx.currentPlayer],
    G.destroyZone[ctx.currentPlayer],
    index
  );
};

export const finish = (G, ctx, index) => {
  moveToArray(G.hand[ctx.currentPlayer], G.out, index);
};
