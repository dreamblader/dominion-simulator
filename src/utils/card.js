export const renderCard = (card, reveal = true) => {
  if (reveal && card.art) {
    return <img src={window.location.origin + card.art} alt={card.name} />;
  } else {
    return "";
  }
};
