import { INVALID_MOVE } from "boardgame.io/core";
import { Types } from "../models/enums";

export const getTileCardsArray = (board, place) => {
  return board[place.y][place.x].cards;
};

export const isFieldOnTile = (cards) => {
  return cards.filter((card) => card.type === Types.FIELD)[0];
};

export const getTileCard = (board, place, index) => {
  return board[place.y][place.x].cards[index];
};

export const originToBoard = (G, origin, index, place) => {
  let tile = G.board[place.y][place.x];

  if (tile) {
    let item = origin.splice(index, 1)[0];
    tile.cards.unshift(item);
    G.selectToBoard = null;
  } else {
    return INVALID_MOVE;
  }
};

export const noneToBoard = (G, card, place) => {
  let tile = G.board[place.y][place.x];

  if (tile) {
    tile.cards.unshift(card);
    G.selectToBoard = null;
  } else {
    return INVALID_MOVE;
  }
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
