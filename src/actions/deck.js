import Consts from "../utils/consts";
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
  moveToArray(G.deck[ctx.playerID], G.hand[ctx.currentPlayer], index);
};

export const searchToDZ = (G, ctx, index) => {
  moveToArray(G.deck[ctx.playerID], G.destroyZone[ctx.currentPlayer], index);
};

export const searchToOOG = (G, ctx, index) => {
  moveToArray(G.deck[ctx.playerID], G.out, index);
};

export const shuffleDeck = (G, ctx) => {
  G.deck[ctx.playerID] = ctx.random.Shuffle(G.deck[ctx.currentPlayer]);
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
    Action("To Hand", "searchToHand"),
    Action("To DZ", "searchToDZ"),
    Action("To OOG", "searchToOOG"),
  ];
  return MenuListData("My Deck", G.deck[id], actions);
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

export default getDeckActionsOnMenu;
