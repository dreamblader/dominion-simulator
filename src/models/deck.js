const Deck = (id = 0, cards = []) => {
  let obj = {
    id: id,
    cards: cards,
  };

  return obj;
};

export default Deck;
