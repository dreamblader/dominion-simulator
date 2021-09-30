const BoardTile = (spawn, x, y) => {
  if (spawn < 0) {
    return null;
  } else {
    let obj = {
      originalX: x,
      originalY: y,
      spawn: spawn,
      cards: [],
    };

    return obj;
  }
};

export default BoardTile;
