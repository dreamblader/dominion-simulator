import React from "react";
import PropTypes from "prop-types";
import Button from "../general/button";
import PhaseBar from "../gameplay/phase-bar";
import ReactImage from "../../images/display/react-img.png";
import { GameContext } from "Client/context/game";

const ControlColumn = () => {
  /*
  ids={[myID, rivalID]}
        currentPlayer={parseInt(ctx.currentPlayer)}
        currentStage={ctx.activePlayers[parseInt(ctx.currentPlayer)]}
        moves={moves}
        events={events}
        reveal={G.reveal}
  */

  const {
    myID,
    rivalID,
    G: { reveal },
    ctx: { activePlayers, currentPlayer },
    moves,
    events,
  } = React.useContext(GameContext);

  const currentPlayerID = parseInt(currentPlayer);
  const currentStage = activePlayers[currentPlayerID];
  const canIReact = reveal[rivalID].length > 0;
  const isMyTurn = currentPlayerID === myID;

  const endMyTurn = () => {
    if (currentPlayerID === myID) {
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
          hidden={canIReact || isMyTurn}
        >
          REACT!
        </Button>
        <PhaseBar turn={isMyTurn} action={changePhase} stage={currentStage} />
        <Button click={() => endMyTurn()} hidden={!isMyTurn}>
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

ControlColumn.propTypes = {};

export default ControlColumn;
