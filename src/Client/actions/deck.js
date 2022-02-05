import Deck from "models/deck";
import Action from "models/action";
import MenuListData from "models/menu-list";
import MenuData from "models/menu";
import Strings from "utils/strings";
import { mapToCard } from "models/card";

export const constructDeck = (deckID, cards, id) => {
  let mappedCards = [];
  cards.forEach((card) => {
    mappedCards.push(...mapToCard(card, id));
  });
  return Deck(deckID, mappedCards);
};

const getDeckForSearch = (deck) => {
  let actions = [
    Action("To Hand", "searchToHand"),
    Action("To DZ", "searchToDZ"),
    Action("To OOG", "searchToOOG"),
  ];
  return MenuListData(Strings.deckHeader, deck, actions);
};

const getDeckActionsOnMenu = (event) => {
  let actions = [
    Action("Draw", "draw"),
    Action("Draw For Turn", "drawForTurn"),
    Action("Search", "getDeckForSearch"),
    Action("Shuffle Deck", "shuffleDeck"),
    Action("Mill", "mill"),
  ];
  return MenuData(event.pageX, event.pageY, actions);
};

const DeckActions = {
  constructDeck,
  getDeckForSearch,
  getDeckActionsOnMenu,
};

export default DeckActions;
