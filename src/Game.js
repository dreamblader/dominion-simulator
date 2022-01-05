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
  backToDeck,
  destroy,
  finish,
} from "./actions/hand";
import {
  setDeck,
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

const Simulator = {
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

export default Simulator;
