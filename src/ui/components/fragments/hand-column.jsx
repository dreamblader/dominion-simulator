import React from "react"
import Hand from "../hand";
import Board from "../board";
import { renderBoard } from "../../../utils/help";

const HandColumn = (props) => {

    const [myID, rivalID] = props.ids;
    const [myHand, rivalHand] = [props.hand[myID], props.hand[rivalID]];
    const [handMenu,
         selectToBoard,
          clearSelectionCallback,
           setHighlightCard] = props.actions;

    return(
        <div className="hand-col">
            <Hand 
            reveal={false}
            list={rivalHand}/>
            <Board 
            board={renderBoard(props.board, myID)} 
            ids={[myID, rivalID]}
            life={props.life} 
            selected={selectToBoard}
            moves={props.moves}
            clear={clearSelectionCallback}/>
            <Hand 
            reveal={true}
            list={myHand} 
            menuClick={handMenu}
            selected={selectToBoard}/>
        </div>
    )
};

export default HandColumn;