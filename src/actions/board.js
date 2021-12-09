import Action from "../models/action";
import MenuData from "../models/menu";
import Place from "../models/place";
import { toBoard } from "../utils/help";

export const placeInHere = (G, ctx, selected, x, y) => {
  if (checkSelection(G, selected, ctx.playerID)) {
    let place = Place(x, y);
    let originName = Object.keys(selected.origin)[0];
    let originIndex = selected.origin[originName];
    //overrides original card with attrs of selected (flipped)
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

const BoardActions = (card, id) => {
  return card.controller === id
    ? [
        Action("Bounce", ""),
        Action("Destroy", ""),
        Action("Finish", ""),
        Action("Move", ""),
        Action("Attack", ""),
        Action("Flip", ""),
        Action("Activate", ""),
        Action("Set Stats", ""),
        Action("Tick", ""),
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
  //TODO returning empty array of actions
  let actions = [];
  if (tile.cards.lenght > 1) {
    actions.push(...getMultipleCardBoardActions(tile.cards[0], id));
    actions.push(...BoardActions(tile.cards[0], id));
  } else if (tile.cards.lenght > 0) {
    actions.push(...BoardActions(tile.cards[0], id));
  }
  return MenuData(event.pageX, event.pageY, actions);
};

export default getBoardActionMenu;
