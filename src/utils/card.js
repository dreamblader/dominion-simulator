export const renderCard = (card, reveal = true) => {
  console.log(card);
  if (reveal && card.art) {
    return (
      <img src={`${window.location.origin}/img/${card.art}`} alt={card.name} />
    );
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
