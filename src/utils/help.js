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
  let position = G.board[place.y][place.x];
  let placeDoNotExist = position === -1 || position === undefined;
  let placeIsOccupied = typeof position === "object" && position !== null;

  if (placeDoNotExist || placeIsOccupied) {
    return INVALID_MOVE;
  } else {
    let item = origin.splice(index, 1)[0];
    G.board[place.y].splice(place.x, 1, item);
  }
};
