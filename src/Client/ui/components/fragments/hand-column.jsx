import React from "react"
import PropTypes from 'prop-types';
import Hand from "../gameplay/hand";
import Board from "../gameplay/board";
import { renderBoard } from "../../../../utils/help";

const HandColumn = ({ids, hand, board, life, moves, actions}) => {

    const [myID, rivalID] = ids;
    const [myHand, rivalHand] = [hand[myID], hand[rivalID]];
    const [handMenu,
        boardMenu,
        selectToBoard,
        clearSelectionCallback,
        setHighlightCard] = actions;

    return(
        <div className="hand-col">
            <Hand 
            reveal={false}
            list={rivalHand}/>
            <Board 
            board={renderBoard(board, myID)} 
            menuClick={boardMenu}
            ids={[myID, rivalID]}
            life={life} 
            selected={selectToBoard}
            moves={moves}
            highlight={setHighlightCard}
            clear={clearSelectionCallback}/>
            <Hand 
            reveal={true}
            list={myHand} 
            menuClick={handMenu}
            highlight={setHighlightCard}
            selected={selectToBoard}/>
        </div>
    )
};

Hand.propTypes = {
    ids: PropTypes.arrayOf(PropTypes.number), 
    hand: PropTypes.arrayOf(PropTypes.object), 
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)), 
    life: PropTypes.arrayOf(PropTypes.number), 
    moves: PropTypes.object, 
    actions: PropTypes.object
}

export default HandColumn;