import Strings from "../../utils/strings";
import ServerActions from "../../Server/actions/deck";
import { mapToCard } from "../../models/card";
import Deck from "../../models/deck";
import Action from "../../models/action";
import MenuListData from "../../models/menu-list";
import MenuData from "../../models/menu";

export const constructDeck = (deckID, cards, id) => {
  let mappedCards = [];
  cards.forEach((card) => {
    mappedCards.push(...mapToCard(card, id));
  });
  return Deck(deckID, mappedCards);
};

const getDeckForSearch = (deck) => {
  let actions = [
    Action("To Hand", ServerActions.searchToHand.name),
    Action("To DZ", ServerActions.searchToDZ.name),
    Action("To OOG", ServerActions.searchToOOG.name),
  ];
  return MenuListData(Strings.deckHeader, deck, actions);
};

const getDeckActionsOnMenu = (event) => {
  let actions = [
    Action("Draw", ServerActions.draw.name),
    Action("Draw For Turn", ServerActions.drawForTurn.name),
    Action("Search", getDeckForSearch.name),
    Action("Shuffle Deck", ServerActions.shuffleDeck.name),
    Action("Mill", ServerActions.mill.name),
  ];
  return MenuData(event.pageX, event.pageY, actions);
};

const DeckActions = {
  constructDeck,
  getDeckForSearch,
  getDeckActionsOnMenu,
};

export default DeckActions;
