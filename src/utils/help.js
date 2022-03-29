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

export const getServer = () => {
  console.log(process.env, process.env.REACT_APP_DEV);
  const { protocol, hostname } = window.location;
  const port = process.env.REACT_APP_DEV ? 8000 : window.location.port;
  return `${protocol}//${hostname}:${port}`;
};
