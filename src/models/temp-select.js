const Temp = (origin, card, flipped = false, x = 0, y = 0) => {
  let obj = {
    origin: origin,
    card: card,
    flipped: flipped,
    x: x,
    y: y,
  };

  return obj;
};

export default Temp;
