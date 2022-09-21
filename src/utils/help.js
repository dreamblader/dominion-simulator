import { GameResult } from "../models/enums";

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

export const orNothing = (val) => {
  if (val) {
    return val;
  } else {
    return "";
  }
};

export const numberOrZero = (number) => {
  return isNaN(number) ? 0 : number;
};

export const isEmpty = (array) => {
  return array.length <= 0;
};

export const safeSplice = (array, index, numOfElements = 1) => {
  array.splice(index, numOfElements);
  return array.filter((element) => element !== undefined);
};

export const getServer = () => {
  const { protocol, hostname } = window.location;
  const port = process.env.REACT_APP_DEV ? 8000 : window.location.port;
  return `${protocol}//${hostname}:${port}`;
};

export const getRivalID = (myID) => {
  return 1 - myID;
};

export const getRivalResult = (myResult) => {
  if (Object.values(GameResult).indexOf(myResult) >= 0) {
    switch (myResult) {
      case GameResult.WINNER:
        return GameResult.LOSER;
      case GameResult.LOSER:
        return GameResult.WINNER;
      case GameResult.TIE:
        return GameResult.TIE;
    }
  }
  return null;
};
