import { moveToArray } from "../utils/help";

export const recycle = (G, ctx, index) => {
  moveToArray(G.out, G.destroyZone[ctx.currentPlayer], index);
};

export const clearMenu = (G, ctx) => {
  if (G.menu) {
    G.menu = null;
  }
};
