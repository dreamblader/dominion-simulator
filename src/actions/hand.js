import { moveToArray, toBoard } from "../utils/help";
import { shuffleDeck } from "./deck";
import Action from "../models/action";
import MenuData from "../models/menu";

export const spawnFaceUp = (G, ctx, index, cordY, cordX) => {
  let place = { x: cordX, y: cordY };
  toBoard(G, G.hand[ctx.currentPlayer], index, place);
};

export const spawnFaceDown = (G, ctx, index) => {};

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

export const getHandActionsOnMenu = (G, ctx, event, pos) => {
  let actions = [
    Action("Back to Top of the Deck", "backToTopDeck", pos),
    Action("Back to Bottom of the Deck", "backToBottomDeck", pos),
    Action("Back to the Deck and Shuffle", "backToDeck", pos),
    Action("Destroy", "destroy", pos),
    Action("Put OUT OF GAME", "finish", pos),
  ];
  G.menu = MenuData(event.pageX, event.pageY, actions);
};
