import { setupDeck, setupProps } from "./actions/setup";
import Consts from "./utils/consts";
import { draw, drawForTurn, search, shuffleDeck, mill } from "./actions/deck";

export const Simulator = {
  setup: (ctx) => ({
    deck: setupDeck(Consts.deckSize, ctx),
    hand: setupProps(ctx.numPlayers),
    destroyZone: setupProps(ctx.numPlayers),
    out: [],
    board: Consts.board,
  }),

  moves: {
    draw,
    drawForTurn,
    search,
    shuffleDeck,
    mill,
  },
};
