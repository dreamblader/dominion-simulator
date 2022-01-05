export const renderCard = (card, reveal = true) => {
  if (card && reveal && card.art) {
    return (
      <img src={`${window.location.origin}/img/${card.art}`} alt={card.name} />
    );
  } else {
    return "";
  }
};
