import { moveToArray } from "../utils/help";
import { shuffleDeck } from "./deck";
import Action from "../models/action";
import MenuData from "../models/menu";
import { Origin } from "../models/enums";
import Temp from "../models/temp-select";

export const spawnFaceUp = (G, ctx, index) => {
  G.hand[ctx.currentPlayer][index].flipped = false;
  selectToField(G, ctx, index);
};

export const spawnFaceDown = (G, ctx, index) => {
  G.hand[ctx.currentPlayer][index].flipped = true;
  selectToField(G, ctx, index);
};

export const backToTopDeck = (G, ctx, index) => {
  moveToArray(G.hand[ctx.currentPlayer], G.deck[ctx.currentPlayer], index);
};

export const backToBottomDeck = (G, ctx, index) => {
  moveToArray(
    G.hand[ctx.currentPlayer],
    G.deck[ctx.currentPlayer],
    index,
    true
  );
};

export const backToDeck = (G, ctx, index) => {
  moveToArray(G.hand[ctx.currentPlayer], G.deck[ctx.currentPlayer], index);
  shuffleDeck(G, ctx);
};

export const destroy = (G, ctx, index) => {
  moveToArray(
    G.hand[ctx.currentPlayer],
    G.destroyZone[ctx.currentPlayer],
    index
  );
};

export const finish = (G, ctx, index) => {
  moveToArray(G.hand[ctx.currentPlayer], G.out, index);
};

export const selectToField = (G, ctx, index) => {
  let origin = {};
  origin[Origin.HAND] = index;
  let card = G.hand[ctx.currentPlayer][index];
  G.selectToBoard = Temp(origin, card);
};

export const getHandActionsOnMenu = (G, ctx, event, pos) => {
  G.selectToBoard = null;
  let actions = [
    Action("Back to Top of the Deck", "backToTopDeck", pos),
    Action("Back to Bottom of the Deck", "backToBottomDeck", pos),
    Action("Back to the Deck and Shuffle", "backToDeck", pos),
    Action("SPAWN Face-up", "spawnFaceUp", pos),
    Action("Destroy", "destroy", pos),
    Action("Put OUT OF GAME", "finish", pos),
  ];
  G.menu = MenuData(event.pageX, event.pageY, actions);
};
