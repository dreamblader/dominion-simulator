import { setupDeck, setupProps } from "./actions/setup";
import Consts from "./utils/consts";
import {
  spawnFaceUp,
  spawnFaceDown,
  backToTopDeck,
  backToBottomDeck,
  backToDeck,
  destroy,
  finish,
  getHandActionsOnMenu,
} from "./actions/hand";
import {
  draw,
  drawForTurn,
  search,
  shuffleDeck,
  mill,
  getDeckActionsOnMenu,
} from "./actions/deck";
import { clearMenu } from "./actions/out";

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
    spawnFaceUp,
    spawnFaceDown,
    backToTopDeck,
    backToBottomDeck,
    backToDeck,
    destroy,
    finish,
    getDeckActionsOnMenu,
    getHandActionsOnMenu,
    clearMenu,
  },
};
