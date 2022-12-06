import { INVALID_MOVE } from "boardgame.io/core";
import { GameResult } from "../../models/enums";
import JokenpoObject, { JokenpoType } from "../../models/jokenpo";
import { getRivalID, getRivalResult, isValueInEnum } from "../../utils/help";
import { setupProps } from "./setup";

const playJokenpo = (G, ctx, playHand) => {
  if (isValueInEnum(JokenpoType, playHand)) {
    const rivalID = getRivalID(ctx.playerID);
    const rivalHand = G.jokenpo[rivalID].hand;
    let myResult = null;
    let rivalResult = null;

    if (rivalHand != null) {
      myResult = checkIfIWinJokenpo(playHand, G.jokenpo[rivalID].hand);
      rivalResult = getRivalResult(myResult);
    }

    G.jokenpo[ctx.playerID] = JokenpoObject(myResult, playHand);
    G.jokenpo[rivalID] = JokenpoObject(rivalResult, rivalHand);
  }
};

const clearJokenpoResult = (G, ctx) => {
  G.jokenpo = setupProps(ctx.numPlayers, JokenpoObject());
};

const winnerSelectTurn = (G, ctx, first) => {
  const win = G.jokenpo[ctx.playerID].gameResult === GameResult.WINNER;
  const notCurrentPlayerWantsGoFirst =
    first && ctx.currentPlayer !== ctx.playerID;
  const currentPlayerWantsGoSecond =
    !first && ctx.currentPlayer === ctx.playerID;

  if (!win) {
    return INVALID_MOVE;
  } else if (notCurrentPlayerWantsGoFirst || currentPlayerWantsGoSecond) {
    ctx.events.endTurn();
  }

  ctx.events.endPhase();
};

const checkIfIWinJokenpo = (myHand, rivalHand) => {
  if (myHand === rivalHand) {
    return GameResult.TIE;
  } else {
    switch (myHand) {
      case JokenpoType.ROCK:
        if (rivalHand === JokenpoType.SCISSORS) {
          return GameResult.WINNER;
        } else break;
      case JokenpoType.PAPER:
        if (rivalHand === JokenpoType.ROCK) {
          return GameResult.WINNER;
        } else break;
      case JokenpoType.SCISSORS:
        if (rivalHand === JokenpoType.PAPER) {
          return GameResult.WINNER;
        } else break;
    }
    return GameResult.LOSER;
  }
};

const ExtraActions = {
  JOKENPO: {
    playJokenpo,
    clearJokenpoResult,
    winnerSelectTurn,
  },
};

export default ExtraActions;
