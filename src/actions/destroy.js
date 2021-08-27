import { moveToArray } from "../utils/help";

export const reborn = (G, ctx, index) => {};

export const backToHand = (G, ctx, index) => {
  moveToArray(
    G.destroyZone[ctx.currentPlayer],
    G.hand[ctx.currentPlayer],
    index
  );
};

export const finish = (G, ctx, index) => {
  moveToArray(G.destroyZone[ctx.currentPlayer], G.out, index);
};
