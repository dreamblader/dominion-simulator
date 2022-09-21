import React from "react";
import Button from "Client/ui/components/general/button";
import Rock from "../../images/misc/rock.png";
import Paper from "../../images/misc/paper.png";
import Scissor from "../../images/misc/scissors.png";
import { JokenpoType } from "models/jokenpo";
import { GameContext } from "Client/context/game";
import "./style.css";

const JokenpoPage = () => {
  const {
    moves,
    G: { jokenpo },
  } = React.useContext(GameContext);

  const [hand, setHand] = React.useState(null);

  const selectHand = (hand) => {
    setHand(hand);
    moves.playJokenpo(hand);
  };

  return (
    <div className="jokenpo-board">
      <h2>Select:</h2>
      <div className="jokenpo-panel">
        <div className="jokenpo-card">
          <h3>Rock</h3>
          <Button click={() => selectHand(JokenpoType.ROCK)}>
            <img src={Rock} />
          </Button>
        </div>
        <div className="jokenpo-card">
          <h3>Paper</h3>
          <Button click={() => selectHand(JokenpoType.PAPER)}>
            <img src={Paper} />
          </Button>
        </div>
        <div className="jokenpo-card">
          <h3>Scissors</h3>
          <Button click={() => selectHand(JokenpoType.SCISSORS)}>
            <img src={Scissor} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JokenpoPage;
