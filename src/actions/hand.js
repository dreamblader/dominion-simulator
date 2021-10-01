import { moveToArray } from "../utils/help";
import { shuffleDeck } from "./deck";
import Action from "../models/action";
import MenuData from "../models/menu";
import { Origin } from "../models/enums";
import Temp from "../models/temp-select";

//SERVER

export const backToTopDeck = (G, ctx, index) => {
  moveToArray(G.hand[ctx.playerID], G.deck[ctx.playerID], index);
};

export const backToBottomDeck = (G, ctx, index) => {
  moveToArray(G.hand[ctx.playerID], G.deck[ctx.playerID], index, true);
};

export const backToDeck = (G, ctx, index) => {
  moveToArray(G.hand[ctx.playerID], G.deck[ctx.playerID], index);
  shuffleDeck(G, ctx);
};

export const destroy = (G, ctx, index) => {
  moveToArray(G.hand[ctx.playerID], G.destroyZone[ctx.playerID], index);
};

export const finish = (G, ctx, index) => {
  moveToArray(G.hand[ctx.playerID], G.out, index);
};

//CLIENT

//TODO move this to client side
export const spawnFaceUp = (hand, myID, index, setSelect) => {
  console.log(setSelect);
  hand[myID][index].flipped = false;
  setSelect(selectToField(hand, myID, index));
};

//TODO move this to client side
export const spawnFaceDown = (G, ctx, index, setSelect) => {
  G.hand[ctx.playerID][index].flipped = true;
  setSelect(selectToField(G, ctx, index));
};

//TODO move this to client side
export const selectToField = (hand, myID, index) => {
  let origin = {};
  origin[Origin.HAND] = index;
  let card = hand[myID][index];
  return Temp(origin, card);
};

const getHandActionsOnMenu = (event, pos, setSelect, hand, myID) => {
  let actions = [
    Action("Back to Top of the Deck", "backToTopDeck", pos),
    Action("Back to Bottom of the Deck", "backToBottomDeck", pos),
    Action("Back to the Deck and Shuffle", "backToDeck", pos),
    Action("SPAWN Face-up", "spawnFaceUp", [hand, myID, pos, setSelect]),
    Action("Destroy", "destroy", pos),
    Action("Put OUT OF GAME", "finish", pos),
  ];
  return MenuData(event.pageX, event.pageY, actions);
};

export default getHandActionsOnMenu;
