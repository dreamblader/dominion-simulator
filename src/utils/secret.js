import { GameResult } from "../models/enums";
import JokenpoObject from "../models/jokenpo";
import Card from "../models/game-pieces/card";
import Deck from "../models/game-pieces/deck";

const HideSecrets = (G, ctx, playerID) => {
  const result = { ...G };
  const myID = parseInt(playerID);
  const rivalID = myID === 0 ? 1 : 0;

  result.deck = hideRivalDeck(result.deck, myID, rivalID);
  result.hand = hideRivalArray(result.hand, myID, rivalID);
  result.board = hideBoardRivalFlippedCard(result.board, myID);
  result.jokenpo = hideJokenpoResultsBeforeWinnerIsSet(
    result.jokenpo,
    myID,
    rivalID
  );

  return result;
};

const hideBoardRivalFlippedCard = (board, myID) => {
  return board.map((row) => {
    return row.map((tile) => {
      if (tile && tile.cards && tile.cards.length > 0) {
        let maskedCards = tile.cards.map((card) => {
          if (card.controller !== myID && card.flipped && !card.inversed) {
            return maskCard(card.controller);
          }
          return card;
        });
        return maskTile(maskedCards, tile);
      }
      return tile;
    });
  });
};

const maskTile = (cards, tile) => {
  let maskTile = { ...tile };
  maskTile.cards = cards;
  return maskTile;
};

const hideRivalDeck = (deck, myID, rivalID) => {
  let result = [];
  result[myID] = deck[myID];
  result[rivalID] = Deck(0, maskCardArray(deck[rivalID].cards, rivalID));
  return result;
};

const hideRivalArray = (array, myID, rivalID) => {
  let result = [];
  result[myID] = array[myID];
  result[rivalID] = maskCardArray(array[rivalID], rivalID);
  return result;
};

const maskCardArray = (cardArray, controllerID) => {
  let maskedArray = [];

  cardArray.forEach((card) => {
    maskedArray.push(maskCard(controllerID));
  });

  return maskedArray;
};

const maskCard = (controllerID) => {
  let maskCard = Card("", controllerID);
  maskCard.flipped = true;
  return maskCard;
};

const hideJokenpoResultsBeforeWinnerIsSet = (jokenpoArray, myID, rivalID) => {
  let result = [];
  let rivalWinResult = result[rivalID].gameResult;

  result[myID] = jokenpoArray[myID];

  if (rivalWinResult === null || rivalWinResult === GameResult.TIE) {
    result[rivalID] = JokenpoObject(rivalWinResult);
  } else {
    result[rivalID] = jokenpoArray[rivalID];
  }

  return result;
};

export default HideSecrets;
