export const getCurentATK = (card) => {
  return card.atk + card.atk_mod;
};

export const getCurentHP = (card) => {
  return card.hp + card.hp_mod;
};

export const getCurrentRange = (card) => {
  return card.range + card.range_mod;
};

export const setStats = (card, stats) => {
  let newCard = { ...card };
  let { atk, hp, range } = stats;
  newCard.atk_mod = atk - card.atk;
  newCard.hp_mod = hp - card.hp;
  newCard.range_mod = range - card.range;
  return newCard;
};

export const resetStats = (card) => {
  let resetCard = { ...card };
  resetCard.atk_mod = 0;
  resetCard.hp_mod = 0;
  resetCard.range_mod = 0;
  resetCard.status.splice(0, resetCard.status.length);
  resetCard.inversed = false;
  resetCard.flipped = false;
  return resetCard;
};
