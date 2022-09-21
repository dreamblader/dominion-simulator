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
import ExtraActions from "./Server/actions/extra";
import JokenpoObject from "./models/jokenpo";
import Combat from "./models/combat";

const phases = Consts.phases.reduce((obj, phase) => {
  return {
    ...obj,
    [phase]: {},
  };
}, {});

export const Simulator = {
  name: "dominion_simulator",
  setup: (ctx, setupData) => ({
    deck: setupDeck(ctx, setupData),
    hand: setupProps(ctx.numPlayers, []),
    destroyZone: setupProps(ctx.numPlayers, []),
    out: [],
    life: [Consts.maxLife, Consts.maxLife],
    combat: Combat(),
    reveal: setupProps(ctx.numPlayers, []),
    board: setupBoard(Consts.board),
    jokenpo: setupProps(ctx.numPlayers, JokenpoObject()),
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
      G.combat = Combat();
      ctx.events.setActivePlayers({ all: "Draw" });
    },
    stage: {
      ...phases,
    },
  },

  phases: {
    preparation: {
      moves: {
        setDeck: DeckActions.setDeck,
        ...ExtraActions.JOKENPO,
      },
      next: "game",
      //TODO: make client and set true to test
      start: true,
    },

    game: {},
  },

  playerView: HideSecrets,
};
