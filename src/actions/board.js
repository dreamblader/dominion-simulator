import Action from "../models/action";
import MenuData from "../models/menu";
import Place from "../models/place";
import { toBoard } from "../utils/help";

export const placeInHere = (G, ctx, selected, x, y) => {
  if (checkSelection(G, selected, ctx.playerID)) {
    let place = Place(x, y);
    let originName = Object.keys(selected.origin)[0];
    let originIndex = selected.origin[originName];
    selected.card.flipped = selected.flipped;
    G[originName][ctx.playerID][originIndex] = selected.card;
    let origin = G[originName][ctx.playerID];
    toBoard(G, origin, originIndex, place);
  }
};

const checkSelection = (G, selected, player) => {
  let origin = Object.keys(selected.origin)[0];
  let originContent = selected.origin[origin];
  let realCard = G[origin][player][originContent];

  if (selected && selected.card.id === realCard.id) {
    return true;
  } else {
    return false;
  }
};

export const moveInBoard = (G, ctx, tile, index = 0) => {};

export const attackCard = (G, ctx, tile, targetTile, index = 0) => {};

export const flipCard = (G, ctx, tile, index = 0) => {
  let card = G.board[tile.originalY][tile.originalX].cards[index];
  G.board[tile.originalY][tile.originalX].cards[index].flipped = !card.flipped;
};

export const activateCard = (G, ctx, tile, index = 0) => {};

export const openStatsMenu = (card) => {};

export const tickCard = (card) => {};

export const bounceCard = (G, ctx, tile, index = 0) => {};

//CLIENT

const BoardActions = (card, id) => {
  return card.controller === id
    ? [
        Action("Move", moveInBoard.name),
        Action("Attack", attackCard.name),
        Action("Flip", flipCard.name),
        Action("Activate", activateCard.name),
        Action("Set Stats", openStatsMenu.name),
        Action("Tick", tickCard.name),
        Action("Bounce", bounceCard.name),
        Action("Destroy", ""),
        Action("Finish", ""),
      ]
    : [];
};

const getMultipleCardBoardActions = (card, id) => {
  let actions = [Action("Check all Cards", "")];
  if (card.controller === id) {
    let extra = [Action("Put card in back", ""), Action("Attach Card", "")];
    actions.push(...extra);
  }
  return actions;
};

const getBoardActionMenu = (event, tile, id) => {
  let actions = [];
  if (tile.cards.length > 1) {
    actions.push(...getMultipleCardBoardActions(tile.cards[0], id));
    actions.push(...BoardActions(tile.cards[0], id));
  } else if (tile.cards.length > 0) {
    actions.push(...BoardActions(tile.cards[0], id));
  }
  return MenuData(event.pageX, event.pageY, actions);
};

export default getBoardActionMenu;
