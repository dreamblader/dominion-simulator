import { moveToArray } from "../../utils/help";

const backToHand = (G, ctx, index) => {
  moveToArray(G.destroyZone[ctx.playerID], G.hand[ctx.playerID], index);
};

const destroyToOOG = (G, ctx, index) => {
  moveToArray(G.destroyZone[ctx.playerID], G.out, index);
};

const DestroyActions = {
  backToHand,
  destroyToOOG,
};

export default DestroyActions;
