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
  let flippedY = 0;
  const rowLength = board.length;
  for (let y = rowLength - 1; y >= 0; y--) {
    flippedBoard.push([]);
    const columnLength = board[y].length;
    for (let x = columnLength - 1; x >= 0; x--) {
      flippedBoard[flippedY].push(board[y][x]);
    }
    flippedY++;
  }
  return flippedBoard;
};

export const resetStats = (card) => {
  let resetCard = card;
  resetCard.atk_mod = 0;
  resetCard.hp_mod = 0;
  resetCard.range_mod = 0;
  resetCard.status.splice(0, resetCard.status.length);
  resetCard.inversed = false;
  resetCard.flipped = false;
  return resetCard;
};
