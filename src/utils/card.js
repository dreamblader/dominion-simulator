export const renderCard = (card, reveal = true) => {
  if (reveal && card.art) {
    return <img src={window.location.origin + card.art} alt={card.name} />;
  } else {
    return "";
  }
};

export const getCurentATK = (card) => {
  return card.atk + card.atk_mod;
};

export const getCurentHP = (card) => {
  return card.hp + card.hp_mod;
};