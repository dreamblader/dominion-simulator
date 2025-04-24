const Deck = (id = 0, cards = [], dominionCards = []) => {
	return {
		id: id,
		cards: cards,
		dominionCards: dominionCards,
	};
};

export default Deck;
