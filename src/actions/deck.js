import Consts from "../utils/consts";
import Strings from "../utils/strings";
import { moveToArray } from "../utils/help";
import { pushToReveal } from "../utils/menu";
import Action from "../models/action";
import MenuRevealData from "../models/menu-reveal";
import MenuListData from "../models/menu-list";
import MenuData from "../models/menu";

//TODO maybe remove this guy ?
export const getDeck = (G, ctx, deckID) => {
  //getMyDeckCards(deckID);
};

export const draw = (G, ctx) => {
  let draw = G.deck[ctx.playerID].pop();
  G.hand[ctx.playerID].push(draw);
};

export const drawForTurn = (G, ctx) => {
  while (G.hand[ctx.playerID].length < Consts.handSize) {
    draw(G, ctx);
  }
};

export const searchToHand = (G, ctx, index) => {
  let content = G.deck[ctx.playerID].cards[index];
  let topText =
    'Your opponent have selected "' + content.title + '" from Deck to Hand';
  G.reveal = pushToReveal(
    G.reveal,
    MenuRevealData(topText, content),
    parseInt(ctx.playerID)
  );
  moveToArray(G.deck[ctx.playerID].cards, G.hand[ctx.playerID], index);
};

export const searchToDZ = (G, ctx, index) => {
  moveToArray(G.deck[ctx.playerID].cards, G.destroyZone[ctx.playerID], index);
};

export const searchToOOG = (G, ctx, index) => {
  moveToArray(G.deck[ctx.playerID].cards, G.out, index);
};

export const shuffleDeck = (G, ctx) => {
  G.deck[ctx.playerID].cards = ctx.random.Shuffle(G.deck[ctx.playerID].cards);
};

export const mill = (G, ctx, number) => {
  let count = number || 1;
  for (let i = 0; i < count; i++) {
    let draw = G.deck[ctx.playerID].cards.pop();
    G.destroyZone[ctx.playerID].push(draw);
  }
};

//CLIENT
export const getDeckForSearch = (deck) => {
  let actions = [
    Action("To Hand", searchToHand.name),
    Action("To DZ", searchToDZ.name),
    Action("To OOG", searchToOOG.name),
  ];
  return MenuListData(Strings.deckHeader, deck, actions);
};

const getDeckActionsOnMenu = (event, shuffle) => {
  let actions = [
    Action("Draw", draw.name),
    Action("Draw For Turn", drawForTurn.name),
    Action("Search", getDeckForSearch.name),
    Action("Shuffle Deck", shuffleDeck.name),
    Action("Mill", mill.name),
  ];
  return MenuData(event.pageX, event.pageY, actions);
};

export default getDeckActionsOnMenu;
