import { INVALID_MOVE } from "boardgame.io/core";

export const randomInt = (maxNumber, ctx) => {
  return parseInt(ctx.random.Number() * maxNumber);
};

export const moveToArray = (origin, destination, index, reverse = false) => {
  let item = origin.splice(index, 1)[0];
  if (reverse) {
    destination.unshift(item);
  } else {
    destination.push(item);
  }
};

export const toBoard = (G, origin, index, place) => {
  let tile = G.board[place.y][place.x];

  if (tile) {
    let item = origin.splice(index, 1)[0];
    tile.cards.push(item);
    G.selectToBoard = null;
  } else {
    return INVALID_MOVE;
  }
};

export const orNothing = (val) => {
  if (val) {
    return val;
  } else {
    return "";
  }
};

export const isEmpty = (array) => {
  return array.length <= 0;
};

export const renderBoard = (board, playerID) => {
  switch (playerID) {
    case 0:
      return board;
    case 1:
      return flip(board);
    default:
      return board;
  }
};

const flip = (board) => {
  let flippedBoard = [];
  const rowLength = board.length;
  for (let y = 0; y < rowLength; y++) {
    flippedBoard.push([]);
    const columnLength = board[y].length;
    for (let x = columnLength - 1; x >= 0; x--) {
      flippedBoard[y].push(board[y][x]);
    }
  }
  return flippedBoard;
};
