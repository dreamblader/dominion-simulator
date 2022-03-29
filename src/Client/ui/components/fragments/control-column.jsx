import React from "react";
import PropTypes from 'prop-types';
import Button from "../general/button";
import ReactImage from "../../images/react-img.png";

const ControlColumn = ({ids, currentPlayer, reveal, moves, events}) => {

    const [myID, rivalID] = ids;

    const endMyTurn = () => {
        if(currentPlayer === myID){
            events.endTurn()
        }
    }

    return(
        <div className="control-col">
                <Button click={() => moves.callReact(ReactImage)}
                hidden={reveal[rivalID].length > 0 || 
                currentPlayer === myID}>
                        REACT!
                </Button>
                <Button click={() => endMyTurn()}
                hidden={currentPlayer !== myID}>
                    END TURN
                </Button>
                <Button click={() => moves.createToken(myID)}>
                    CREATE TOKEN
                </Button>
            </div> 
    )
}

ControlColumn.propTypes = {
    ids: PropTypes.arrayOf(PropTypes.number), 
    currentPlayer: PropTypes.number, 
    reveal: PropTypes.arrayOf(PropTypes.array), 
    moves: PropTypes.object, 
    events: PropTypes.object
}

export default ControlColumn;