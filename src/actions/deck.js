import Consts from "../utils/consts";
import { moveToArray } from "../utils/help";

export const draw = (G, ctx) => {
  let draw = G.deck[ctx.currentPlayer].pop();
  G.hand[ctx.currentPlayer].push(draw);
};

export const drawForTurn = (G, ctx) => {
  while (G.hand[ctx.currentPlayer].length < Consts.handSize) {
    draw(G, ctx);
  }
};

export const search = (G, ctx, index) => {
  moveToArray(G.deck[ctx.currentPlayer], G.hand[ctx.currentPlayer], index);
  shuffleDeck(G, ctx);
};

export const shuffleDeck = (G, ctx) => {
  G.deck[ctx.currentPlayer] = ctx.random.Shuffle(G.deck[ctx.currentPlayer]);
};

export const mill = (G, ctx, number) => {
  let count = number || 1;
  for (let i = 0; i < count; i++) {
    let draw = G.deck[ctx.currentPlayer].pop();
    G.destroyZone[ctx.currentPlayer].push(draw);
  }
};
