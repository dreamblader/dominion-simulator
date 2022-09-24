import React from "react";
import { JokenpoType } from "models/jokenpo";
import { GameContext } from "Client/context/game";
import { ClassNames, getExtraClasses } from "utils/style-class";
import { toStyleSeconds } from "utils/help";
import JokenpoCard from "../jokenpo-card/jokenpo-card";
import "./jokenpo-style.css";

const Jokenpo = () => {
  const {
    myID,
    rivalID,
    moves,
    G: { jokenpo },
  } = React.useContext(GameContext);

  const animationTime = 1500;
  const resultTime = 1000;

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

  const renderResult = () => {
    const myResult = jokenpo[myID].gameResult;
    if (myResult != null) {
      return (
        <div className="jokenpo-result" style={styleVars}>
          <h1 className={`result-${myResult}`}>{myResult.toUpperCase()}</h1>
          <JokenpoCard
            hand={jokenpo[rivalID].hand ?? jokenpo[myID].hand}
            disabled={true}
          />
        </div>
      );
    } else {
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
