import Action from "models/action";
import MenuData from "models/menu";
import Place from "models/place";
import Temp from "models/temp-select";
import MenuListData from "models/menu-list";
import Strings from "utils/strings";
import { Origin, SelectTypes, Types } from "models/enums";
import { getTileCard } from "utils/board";
import MenuStatusData from "models/menu-stats";

const select = (board, place, index, type) => {
  let origin = {};
  origin[Origin.BOARD] = index;
  let card = getTileCard(board, place, index);
  return Temp(origin, card, card.flipped, place.x, place.y, type);
};

const moveInBoard = (board, place, index = 0) => {
  return select(board, place, index, SelectTypes.TO_BOARD);
};

const selectToAttack = (board, place, index = 0) => {
  return select(board, place, index, SelectTypes.TO_ATTACK);
};

const openStatsMenu = (board, place, index = 0) => {
  let card = getTileCard(board, place, index);
  return MenuStatusData(place, card, index);
};

const BoardActionsMenu = (card, id, place) => {
  return [
    Action("Move", "moveInBoard", [place]),
    Action("Attack", "selectToAttack", [place]),
    Action("Flip", "flipCard", [place]),
    Action("Invert", "invertCard", [place]),
    Action("Activate", "activateCard", [place]),
    //Action("Tick", ServerActions.tickCard.name),
    Action("Bounce", "bounceCard", [place]),
    Action("Destroy", "destroyCard", [place]),
    Action("Finish", "finishCard", [place]),
  ];
};

const getMultipleCardBoardActions = (tile, id) => {
  //let card = tile.cards[0];
  let place = Place(tile.originalX, tile.originalY);
  let actions = [
    Action("Check all Cards", "getTileCardsList", [tile]),
    Action("Put card in back", "tileCardToBack", [place]),
  ];
  /*
  if (card.controller === id) {
    let extra = [
      ,
      //Action("Attach Card", attachArtifact.name),
    ];
    actions.push(...extra);
  }
  */
  return actions;
};

const getCardTypeBasedActions = (card, id, place) => {
  switch (card.type) {
    case Types.UNITY:
      return [Action("Set Stats", "openStatsMenu", [place])];
    default:
      return [];
  }
};

const getBoardActionMenu = (event, tile, id) => {
  let actions = [];
  let place = Place(tile.originalX, tile.originalY);

  if (tile.cards.length > 1) {
    actions.push(...getMultipleCardBoardActions(tile, id));
  }
  if (tile.cards.length > 0) {
    let card = tile.cards[0];
    let canControl = card.controller === id || card.inversed;
    if (canControl) {
      actions.push(...getCardTypeBasedActions(card, id, place));
      actions.push(...BoardActionsMenu(card, id, place));
    }
  }
  return MenuData(event.pageX, event.pageY, actions);
};

const getTileCardsList = (tile) => {
  let place = Place(tile.originalX, tile.originalY);
  let actions = [
    Action("To Top", "tileCardToFront", [place]),
    Action("To Back", "tileCardToBack", [place]),
    Action("Set Stats", "openStatsMenu", [place]),
    Action("Attack", "selectToAttack", [place]),
    Action("Activate", "activateCard", [place]),
    //Action("Attach Card", attachArtifact.name),
    Action("Bounce", "bounceCard", [place]),
    Action("Destroy", "destroyCard", [place]),
    Action("Finish", "finishCard", [place]),
  ];
  return MenuListData(Strings.boardHeader, tile.cards, actions);
};

const BoardActions = {
  moveInBoard,
  openStatsMenu,
  selectToAttack,
  getBoardActionMenu,
  getTileCardsList,
};

export default BoardActions;
