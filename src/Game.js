import { setupDeck, setupHands } from "./actions/setup";
import Consts from "./utils/consts";
import { draw, drawForTurn, shuffleDeck } from "./actions/deck";

export const Simulator = {
  setup: (ctx) => ({
    deck: setupDeck(Consts.deckSize, ctx),
    hand: setupHands(ctx.numPlayers),
  }),

  moves: {
    draw,
    drawForTurn,
    shuffleDeck,
  },
};
