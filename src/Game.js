import { ActivePlayers, Stage, TurnOrder } from "boardgame.io/core";
import { setupDeck, setupProps, setupBoard } from "./Server/actions/setup";
import Consts from "./utils/consts";
import HideSecrets from "./utils/secret";
import BoardActions from "./Server/actions/board";
import HandActions from "./Server/actions/hand";
import DeckActions from "./Server/actions/deck";
import DestroyActions from "./Server/actions/destroy";
import OutActions from "./Server/actions/out";
import MiscActions from "./Server/actions/controls";

const phases = Consts.phases.reduce((obj, phase) => {
  return { ...obj, [phase]: {} };
}, {});

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
    ...DeckActions,
    ...HandActions,
    ...DestroyActions,
    ...OutActions,
    ...BoardActions,
    ...MiscActions,
  },

  minPlayers: 2,
  maxPlayers: 2,

  turn: {
    order: TurnOrder.DEFAULT,
    onBegin: (G, ctx) => {
      ctx.events.setActivePlayers({ all: "Draw" });
    },
    stage: {
      ...phases,
    },
  },

  playerView: HideSecrets,
};
