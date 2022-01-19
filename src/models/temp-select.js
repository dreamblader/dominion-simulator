import { SelectTypes } from "./enums";

const Temp = (
  origin,
  card,
  flipped = false,
  x = 0,
  y = 0,
  type = SelectTypes.TO_BOARD
) => {
  let obj = {
    origin: origin,
    type: type,
    card: card,
    flipped: flipped,
    x: x,
    y: y,
  };

  return obj;
};

export default Temp;
