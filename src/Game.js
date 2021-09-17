import { setupDeck, setupProps } from "./actions/setup";
import {
  spawnFaceUp,
  spawnFaceDown,
  backToTopDeck,
  backToBottomDeck,
  backToDeck,
  destroy,
  finish,
} from "./actions/hand";
import Consts from "./utils/consts";
import {
  draw,
  drawForTurn,
  search,
  shuffleDeck,
  mill,
  getDeckActionsOnMenu,
} from "./actions/deck";

export const Simulator = {
  setup: (ctx) => ({
    deck: setupDeck(Consts.deckSize, ctx),
    hand: setupProps(ctx.numPlayers),
    destroyZone: setupProps(ctx.numPlayers),
    out: [],
    board: Consts.board,
    menu: null,
  }),

  moves: {
    draw,
    drawForTurn,
    search,
    shuffleDeck,
    mill,
    getDeckActionsOnMenu,
    spawnFaceUp,
    spawnFaceDown,
    backToTopDeck,
    backToBottomDeck,
    backToDeck,
    destroy,
    finish,
  },
};
