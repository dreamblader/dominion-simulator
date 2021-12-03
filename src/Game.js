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
import {
  getDeck,
  draw,
  drawForTurn,
  searchToHand,
  searchToDZ,
  searchToOOG,
  shuffleDeck,
  mill,
} from "./actions/deck";
import { backToHand, destroyToOOG } from "./actions/destroy";
import { recycle } from "./actions/out";
import { clearReveal, callReact, setLife } from "./actions/controls";

export const Simulator = {
  name: "dominion_simulator",

  setup: (ctx, setupData) => ({
    deck: setupDeck(ctx, setupData),
    hand: setupProps(ctx.numPlayers, []),
    destroyZone: setupProps(ctx.numPlayers, []),
    out: [],
    life: [Consts.maxLife, Consts.maxLife],
    reveal: setupProps(ctx.numPlayers, []),
    board: setupBoard(Consts.board),
  }),

  moves: {
    //Deck
    getDeck,
    draw,
    drawForTurn,
    searchToHand,
    searchToDZ,
    searchToOOG,
    shuffleDeck,
    mill,
    //Hand
    backToTopDeck,
    backToBottomDeck,
    backToDeck,
    destroy,
    finish,
    //DZ
    backToHand,
    destroyToOOG,
    //OUT
    recycle,
    //Board
    placeInHere,
    //MISC
    clearReveal,
    callReact,
    setLife,
  },

  minPlayers: 2,
  maxPlayers: 2,

  turn: {
    order: TurnOrder.DEFAULT,
    activePlayers: ActivePlayers.ALL,
  },

  playerView: HideSecrets,
};
