import React from "react";
import PropTypes from "prop-types";
import Hand from "../gameplay/hand";
import Board from "../gameplay/board";
import { renderBoard } from "../../../../utils/board";
import { GameContext } from "Client/context/game";

const HandColumn = ({ actions }) => {
  const {
    myID,
    rivalID,
    G: { hand, board },
  } = React.useContext(GameContext);

  const [myHand, rivalHand] = [hand[myID], hand[rivalID]];
  const [
    handMenu,
    boardMenu,
    selectToBoard,
    clearSelectionCallback,
    setHighlightCard,
  ] = actions;

  return (
    <div className="hand-col">
      <Hand reveal={false} list={rivalHand} />
      <Board
        board={renderBoard(board, myID)}
        menuClick={boardMenu}
        selected={selectToBoard}
        highlight={setHighlightCard}
        clear={clearSelectionCallback}
      />
      <Hand
        reveal={true}
        list={myHand}
        menuClick={handMenu}
        highlight={setHighlightCard}
        selected={selectToBoard}
      />
    </div>
  );
};

Hand.propTypes = {
  actions: PropTypes.object,
};

export default HandColumn;
