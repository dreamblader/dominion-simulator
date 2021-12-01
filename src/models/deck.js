const Deck = (cards = []) => {
  let obj = {
    id: 0,
    started: false,
    cards: cards,
  };

  return obj;
};

export default Deck;
