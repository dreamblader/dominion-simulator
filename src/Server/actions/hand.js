import { moveToArray } from "../../utils/help";

const backToTopDeck = (G, ctx, index) => {
  moveToArray(G.hand[ctx.playerID], G.deck[ctx.playerID].cards, index);
};

const backToBottomDeck = (G, ctx, index) => {
  moveToArray(G.hand[ctx.playerID], G.deck[ctx.playerID].cards, index, true);
};

const destroy = (G, ctx, index) => {
  moveToArray(G.hand[ctx.playerID], G.destroyZone[ctx.playerID], index);
};

const finish = (G, ctx, index) => {
  moveToArray(G.hand[ctx.playerID], G.out, index);
};

const HandActions = {
  backToTopDeck,
  backToBottomDeck,
  destroy,
  finish,
};

export default HandActions;
