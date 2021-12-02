import { getDeckCardsQuery } from "../utils/queries";

export const getMyDeckCards = (database, deckId) => {
  database.all(getDeckCardsQuery(deckId), [], (err, rows) => {
    let cards = [];
    if (err) {
      console.log(err);
    } else {
      rows.forEach((row) => {
        cards.push(row);
      });
    }
    return cards;
  });
};
