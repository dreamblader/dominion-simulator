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
