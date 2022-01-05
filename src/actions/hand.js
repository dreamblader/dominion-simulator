import { moveToArray } from "../utils/help";
import { shuffleDeck } from "./deck";
import Action from "../models/action";
import MenuData from "../models/menu";
import { Origin } from "../models/enums";
import Temp from "../models/temp-select";

//SERVER

export const backToTopDeck = (G, ctx, index) => {
  moveToArray(G.hand[ctx.playerID], G.deck[ctx.playerID].cards, index);
};

export const backToBottomDeck = (G, ctx, index) => {
  moveToArray(G.hand[ctx.playerID], G.deck[ctx.playerID].cards, index, true);
};

export const backToDeck = (G, ctx, index) => {
  moveToArray(G.hand[ctx.playerID], G.deck[ctx.playerID].cards, index);
  shuffleDeck(G, ctx);
};

export const destroy = (G, ctx, index) => {
  moveToArray(G.hand[ctx.playerID], G.destroyZone[ctx.playerID], index);
};

export const finish = (G, ctx, index) => {
  moveToArray(G.hand[ctx.playerID], G.out, index);
};

//CLIENT

export const spawnFaceUp = (hand, myID, index) => {
  //hand[myID][index].flipped = false;
  return selectToField(hand, myID, index, false);
};

export const spawnFaceDown = (hand, myID, index) => {
  //hand[myID][index].flipped = true;
  return selectToField(hand, myID, index, true);
};

export const selectToField = (hand, myID, index, flipped) => {
  let origin = {};
  origin[Origin.HAND] = index;
  let card = hand[myID][index];
  return Temp(origin, card, flipped);
};

const getHandActionsOnMenu = (event, pos, hand, myID) => {
  let actions = [
    Action("Back to Top of the Deck", backToTopDeck.name, [pos]),
    Action("Back to Bottom of the Deck", backToBottomDeck.name, [pos]),
    Action("Back to the Deck and Shuffle", backToDeck.name, [pos]),
    Action("SPAWN Face-up", spawnFaceUp.name, [hand, myID, pos]),
    Action("SPAWN Face-down", spawnFaceDown.name, [hand, myID, pos]),
    Action("Destroy", destroy.name, [pos]),
    Action("Put OUT OF GAME", finish.name, [pos]),
  ];
  return MenuData(event.pageX, event.pageY, actions);
};

export default getHandActionsOnMenu;
