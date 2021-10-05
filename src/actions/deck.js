import Consts from "../utils/consts";
import Strings from "../utils/strings";
import { moveToArray } from "../utils/help";
import Action from "../models/action";
import MenuListData from "../models/menu-list";
import MenuData from "../models/menu";

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
  moveToArray(G.deck[ctx.playerID], G.hand[ctx.playerID], index);
  shuffleDeck(G, ctx);
};

export const searchToDZ = (G, ctx, index) => {
  moveToArray(G.deck[ctx.playerID], G.destroyZone[ctx.playerID], index);
  shuffleDeck(G, ctx);
};

export const searchToOOG = (G, ctx, index) => {
  moveToArray(G.deck[ctx.playerID], G.out, index);
  shuffleDeck(G, ctx);
};

export const shuffleDeck = (G, ctx) => {
  G.deck[ctx.playerID] = ctx.random.Shuffle(G.deck[ctx.playerID]);
};

export const mill = (G, ctx, number) => {
  let count = number || 1;
  for (let i = 0; i < count; i++) {
    let draw = G.deck[ctx.playerID].pop();
    G.destroyZone[ctx.playerID].push(draw);
  }
};

//CLIENT

export const getDeckForSearch = (G, id) => {
  let actions = [
    Action("To Hand", searchToHand.name),
    Action("To DZ", searchToDZ.name),
    Action("To OOG", searchToOOG.name),
  ];
  return MenuListData(Strings.deckHeader, G.deck[id], actions);
};

const getDeckActionsOnMenu = (event, shuffle) => {
  shuffle();
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
