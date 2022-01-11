import { ActivePlayers, TurnOrder } from "boardgame.io/core";
import { setupDeck, setupProps, setupBoard } from "./actions/setup";
import Consts from "./utils/consts";
import HideSecrets from "./utils/secret";
import {
  placeInHere,
  attackCard,
  invertCard,
  flipCard,
  activateCard,
  bounceCard,
  destroyCard,
  finishCard,
  attachArtifact,
  tileCardToBack,
  tileCardToFront,
} from "./actions/board";
import {
  backToTopDeck,
  backToBottomDeck,
  destroy,
  finish,
} from "./actions/hand";
import DeckActions from "./Server/actions/deck";
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
    ...DeckActions,
    //Hand
    backToTopDeck,
    backToBottomDeck,
    destroy,
    finish,
    //DZ
    backToHand,
    destroyToOOG,
    //OUT
    recycle,
    //Board
    placeInHere,
    attackCard,
    invertCard,
    flipCard,
    activateCard,
    bounceCard,
    destroyCard,
    finishCard,
    attachArtifact,
    tileCardToBack,
    tileCardToFront,
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
