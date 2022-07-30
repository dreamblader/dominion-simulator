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

//TODO breaking build.js
export const generatePassCode = (size, prefix) => {
  let result = prefix;
  const symbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  for (let i = 0; i < size; i++) {
    let s = Math.floor(Math.random * symbols.length);
    result += s;
  }

  return result;
};
