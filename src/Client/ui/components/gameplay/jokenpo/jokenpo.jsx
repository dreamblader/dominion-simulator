import React from "react";
import { JokenpoType } from "models/jokenpo";
import { GameContext } from "Client/context/game";
import { ClassNames, getExtraClasses } from "utils/style-class";
import { toStyleSeconds } from "utils/help";
import { GameResult } from "models/enums";
import JokenpoCard from "../jokenpo-card/jokenpo-card";
import "./jokenpo-style.css";
import Consts from "utils/consts";
import MenuSelectTurn from "../../menus/menu-select-turn/menu-select-turn";
import WaitScreen from "../../general/wait-screen/wait-screen";
import { jokenpoActions, JokenpoContext } from "Client/context/jokenpo-ctx";

const Jokenpo = () => {
  const {
    myID,
    rivalID,
    moves,
    G: { jokenpo },
  } = React.useContext(GameContext);

  const { jokenpoDispatch } = React.useContext(JokenpoContext);

  const animationTime = Consts.animationTimes.jokenpoShow;
  const resultTime = Consts.animationTimes.jokenpoResultShow;

  const styleVars = {
    "--jokenpoAnimationTime": toStyleSeconds(animationTime),
    "--resultAnimationTime": toStyleSeconds(resultTime),
  };

  const [lock, setLock] = React.useState(false);

  const selectHand = (hand) => {
    if (!lock) {
      setLock(true);
      moves.playJokenpo(hand);
    }
  };

  const isInvisible = (hand) => {
    return lock && !isSelected(hand);
  };

  const isSelected = (hand) => {
    return jokenpo[myID].hand === hand;
  };

  const checkResult = (result) => {
    if (result === GameResult.TIE) {
      moves.clearJokenpoResult();
    }

    jokenpoDispatch({ type: jokenpoActions.SET_RESULT, payload: result });
  };

  const renderResult = () => {
    const myResult = jokenpo[myID].gameResult;

    if (myResult != null) {
      return (
        <div className="jokenpo-result" style={styleVars}>
          <h1
            onAnimationEnd={() => {
              checkResult(myResult);
            }}
            className={`result-${myResult}`}
          >
            {myResult.toUpperCase()}
          </h1>
          <JokenpoCard
            hand={jokenpo[rivalID].hand ?? jokenpo[myID].hand}
            disabled={true}
          />
        </div>
      );
    } else {
      if (jokenpo[myID].hand === null) {
        setLock(false);
      }
      return <h1>Waiting other player choice...</h1>;
    }
  };

  return (
    <div className="jokenpo-board">
      {!lock && <h1>Select:</h1>}
      <div className="jokenpo-panel">
        <JokenpoCard
          hand={JokenpoType.ROCK}
          click={selectHand}
          disabled={lock}
          extraClass={getExtraClasses(
            [isInvisible(JokenpoType.ROCK), isSelected(JokenpoType.ROCK)],
            [ClassNames.HIDDEN, ClassNames.SELECTED]
          )}
        />
        <JokenpoCard
          hand={JokenpoType.PAPER}
          click={selectHand}
          disabled={lock}
          extraClass={getExtraClasses(
            [isInvisible(JokenpoType.PAPER), isSelected(JokenpoType.PAPER)],
            [ClassNames.HIDDEN, ClassNames.SELECTED]
          )}
        />
        <JokenpoCard
          hand={JokenpoType.SCISSORS}
          click={selectHand}
          disabled={lock}
          extraClass={getExtraClasses(
            [
              isInvisible(JokenpoType.SCISSORS),
              isSelected(JokenpoType.SCISSORS),
            ],
            [ClassNames.HIDDEN, ClassNames.SELECTED]
          )}
        />
      </div>
      {lock && renderResult()}
    </div>
  );
};

export default Jokenpo;
