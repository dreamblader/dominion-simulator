import Deck from "models/game-pieces/deck";
import Action from "models/action";
import MenuListData from "models/menu/menu-list";
import MenuData from "models/menu/menu";
import Strings from "utils/strings";
import { mapToCard } from "models/game-pieces/card";

export const constructDeck = (deckID, cards, id) => {
	let mappedCards = [];
	let dominionCards = [];
	cards.forEach((card) => {
		if (card.TYPE === "Domain") {
			dominionCards.push(...mapToCard(card, id));
		} else {
			mappedCards.push(...mapToCard(card, id));
		}
	});
	return Deck(deckID, mappedCards, dominionCards);
};

const getDeckForSearch = (deck) => {
	let actions = [
		Action("To Hand", "searchToHand"),
		Action("To DZ", "searchToDZ"),
		Action("To OOG", "searchToOOG"),
	];
	return MenuListData(Strings.deckHeader, deck, actions, true);
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
