export const randomInt = (maxNumber, ctx) => {
  return parseInt(ctx.random.Number() * maxNumber);
};

//TODO this is creating a ARRAY of 1 element and appending it -> extract the element
export const moveToArray = (origin, destination, index, reverse = false) => {
  let item = origin.splice(index, 1);
  if (reverse) {
    destination.unshift(item);
  } else {
    destination.push(item);
  }
};
