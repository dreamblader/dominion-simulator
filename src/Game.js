import { ActivePlayers, TurnOrder } from "boardgame.io/core";
import { setupDeck, setupProps, setupBoard } from "./actions/setup";
import Consts from "./utils/consts";
import HideSecrets from "./utils/secret";
import { placeInHere } from "./actions/board";
import {
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
  }),

  moves: {
    draw,
    drawForTurn,
    search,
    shuffleDeck,
    mill,
    backToTopDeck,
    backToBottomDeck,
    backToDeck,
    destroy,
    finish,
    placeInHere,
  },

  turn: {
    order: TurnOrder.DEFAULT,
    activePlayers: ActivePlayers.ALL,
  },

  playerView: HideSecrets,
};
