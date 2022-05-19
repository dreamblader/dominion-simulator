import React from "react";
import PropTypes from "prop-types";
import Button from "../general/button";
import PhaseBar from "../gameplay/phase-bar";
import ReactImage from "../../images/react-img.png";

const ControlColumn = ({
  ids,
  currentPlayer,
  reveal,
  moves,
  events,
  currentStage,
}) => {
  const [myID, rivalID] = ids;

  const endMyTurn = () => {
    if (currentPlayer === myID) {
      events.endTurn();
    }
  };

  const changePhase = (phase) => {
    events.setStage(phase);
  };

  return (
    <div className="control-col">
      <div>
        <Button
          click={() => moves.callReact(ReactImage)}
          hidden={reveal[rivalID].length > 0 || currentPlayer === myID}
        >
          REACT!
        </Button>
        <PhaseBar
          turn={currentPlayer === myID}
          action={changePhase}
          stage={currentStage}
        />
        <Button click={() => endMyTurn()} hidden={currentPlayer !== myID}>
          END TURN
        </Button>
        <Button click={() => moves.createToken(myID)}>CREATE TOKEN</Button>
      </div>
      <div>
        <Button click={() => moves.flipCoin(myID)}>Flip Coin</Button>
        <Button click={() => moves.rollD6(myID)}>D6</Button>
        <Button click={() => moves.rollD8(myID)}>D8</Button>
      </div>
    </div>
  );
};

ControlColumn.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.number),
  currentPlayer: PropTypes.number,
  reveal: PropTypes.arrayOf(PropTypes.array),
  moves: PropTypes.object,
  events: PropTypes.object,
  currentStage: PropTypes.string,
};

export default ControlColumn;
