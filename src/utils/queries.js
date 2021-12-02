export const getDeckCardsQuery = (id) => {
  return `SELECT * FROM Cards 
      INNER JOIN DeckCardRelation 
      ON Cards.ID = DeckCardRelation.CARD_ID
      WHERE DECK_ID = ${id}`;
};

export const getMyDecksQuery = (id = 0) => {
  return `SELECT * 
      FROM Decks 
      WHERE USER_ID = 0 OR USER_ID = ${id}`;
};
