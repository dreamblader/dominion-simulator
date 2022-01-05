import React from "react";
import Button from "../button";
import ReactImage from "../../images/react-img.png";

const ControlColumn = (props) => {

    const [myID, rivalID] = props.ids;

    const endMyTurn = () => {
        if(props.currentPlayer === myID){
            props.events.endTurn()
        }
    }

    return(
        <div className="control-col">
                <Button click={() => props.moves.callReact(ReactImage)}
                hidden={props.reveal[rivalID].length > 0 || 
                props.currentPlayer === myID}>
                        REACT!
                </Button>
                <Button click={() => endMyTurn()}
                hidden={props.currentPlayer !== myID}>
                    END TURN
                </Button>
            </div>
    )
}

export default ControlColumn;