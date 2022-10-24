export const JokenpoType = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

const JokenpoObject = (gameResult = null, hand = null) => {
  let obj = {
    gameResult: gameResult,
    hand: hand,
  };

  return obj;
};

export default JokenpoObject;
