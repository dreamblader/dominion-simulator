const BoardTile = (spawn) => {
  if (spawn < 0) {
    return null;
  } else {
    let obj = {
      spawn: spawn,
      cards: [],
    };

    return obj;
  }
};

export default BoardTile;
