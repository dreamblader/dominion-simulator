import Action from "models/action";
import ServerActions from "Server/actions/board";
import MenuData from "models/menu";
import Place from "models/place";
import Temp from "models/temp-select";
import MenuListData from "models/menu-list";
import Strings from "utils/strings";
import { Origin } from "models/enums";
import { getTileCard } from "utils/board";

const moveInBoard = (board, place, index = 0) => {
  let origin = {};
  origin[Origin.BOARD] = index;
  let card = getTileCard(board, place, index);
  return Temp(origin, card, card.flipped, place.x, place.y);
};

const BoardActionsMenu = (card, id, place) => {
  return card.controller === id || !card.inversed
    ? [
        Action("Move", moveInBoard.name, [place]),
        Action("Attack", ServerActions.attackCard.name),
        Action("Flip", ServerActions.flipCard.name, [place]),
        Action("Invert", ServerActions.invertCard.name, [place]),
        //Action("Activate", ServerActions.activateCard.name),
        Action("Set Stats", ServerActions.openStatsMenu.name),
        //Action("Tick", ServerActions.tickCard.name),
        Action("Bounce", ServerActions.bounceCard.name, [place]),
        Action("Destroy", ServerActions.destroyCard.name, [place]),
        Action("Finish", ServerActions.finishCard.name, [place]),
      ]
    : [];
};

const getMultipleCardBoardActions = (tile, id) => {
  let card = tile.cards[0];
  let place = Place(tile.originalX, tile.originalY);
  let actions = [Action("Check all Cards", getTileCardsList.name, [tile])];
  if (card.controller === id) {
    let extra = [
      Action("Put card in back", ServerActions.tileCardToBack.name, [place]),
      //Action("Attach Card", attachArtifact.name),
    ];
    actions.push(...extra);
  }
  return actions;
};

const getBoardActionMenu = (event, tile, id) => {
  let actions = [];
  let place = Place(tile.originalX, tile.originalY);
  if (tile.cards.length > 1) {
    actions.push(...getMultipleCardBoardActions(tile, id));
    actions.push(...BoardActionsMenu(tile.cards[0], id, place));
  } else if (tile.cards.length > 0) {
    actions.push(...BoardActionsMenu(tile.cards[0], id, place));
  }
  return MenuData(event.pageX, event.pageY, actions);
};

const getTileCardsList = (tile) => {
  let place = Place(tile.originalX, tile.originalY);
  let actions = [
    Action("To Top", ServerActions.tileCardToFront.name, [place]),
    Action("To Back", ServerActions.tileCardToBack.name, [place]),
    //Action("Attach Card", attachArtifact.name),
    Action("Bounce", ServerActions.bounceCard.name, [place]),
    Action("Destroy", ServerActions.destroyCard.name, [place]),
    Action("Finish", ServerActions.finishCard.name, [place]),
  ];
  return MenuListData(Strings.boardHeader, tile.cards, actions);
};

const BoardActions = {
  moveInBoard,
  getBoardActionMenu,
  getTileCardsList,
};

export default BoardActions;
