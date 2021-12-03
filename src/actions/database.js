import { getDeckCardsQuery } from "../utils/queries";

export const getMyDeckCards = (database, deckId) => {
  return runQuery(database, getDeckCardsQuery(deckId));
};

const runQuery = (database, sql, params = []) => {
  return new Promise((resolve, reject) => {
    database.all(sql, params, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
