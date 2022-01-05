import { ActivePlayers, TurnOrder } from "boardgame.io/core";
import { setupDeck, setupProps, setupBoard } from "./Server/actions/setup";
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
} from "./Server/actions/board";
import {
  backToTopDeck,
  backToBottomDeck,
  backToDeck,
  destroy,
  finish,
} from "./Server/actions/hand";
import {
  setDeck,
  draw,
  drawForTurn,
  searchToHand,
  searchToDZ,
  searchToOOG,
  shuffleDeck,
  mill,
} from "./Server/actions/deck";
import { backToHand, destroyToOOG } from "./Server/actions/destroy";
import { recycle } from "./Server/actions/out";
import { clearReveal, callReact, setLife } from "./Server/actions/controls";

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
    setDeck,
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
