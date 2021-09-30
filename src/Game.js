import { setupDeck, setupProps, setupBoard } from "./actions/setup";
import Consts from "./utils/consts";
import { placeInHere } from "./actions/board";
import {
  spawnFaceUp,
  spawnFaceDown,
  backToTopDeck,
  backToBottomDeck,
  backToDeck,
  destroy,
  finish,
} from "./actions/hand";
import { draw, drawForTurn, search, shuffleDeck, mill } from "./actions/deck";

export const Simulator = {
  setup: (ctx) => ({
    deck: setupDeck(Consts.deckSize, ctx),
    hand: setupProps(ctx.numPlayers, []),
    destroyZone: setupProps(ctx.numPlayers, []),
    out: [],
    life: [Consts.maxLife, Consts.maxLife],
    board: setupBoard(Consts.board),
    selectToBoard: setupProps(ctx.numPlayers, null),
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
    placeInHere,
  },
};
