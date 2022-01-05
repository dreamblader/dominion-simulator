import Action from "../models/action";
import MenuData from "../models/menu";
import MenuListData from "../models/menu-list";
import Strings from "../utils/strings";
import Place from "../models/place";
import Temp from "../models/temp-select";
import MenuListData from "../models/menu-list";
import Strings from "../utils/strings";
import { Origin } from "../models/enums";
import { toBoard, resetStats } from "../utils/help";

export const placeInHere = (G, ctx, selected, x, y) => {
  if (checkSelection(G, selected, ctx.playerID)) {
    let place = Place(x, y);
    let originName = Object.keys(selected.origin)[0];
    let originIndex = selected.origin[originName];
    if (selected.flipped && originName !== Origin.BOARD) {
      selected.card.flipped = selected.flipped;
      G[originName][ctx.playerID][originIndex] = selected.card;
    }
    let origin =
      originName !== Origin.BOARD
        ? G[originName][ctx.playerID]
        : G[originName][selected.y][selected.x].cards;
    toBoard(G, origin, originIndex, place);
  }
};

const checkSelection = (G, selected, player) => {
  let origin = Object.keys(selected.origin)[0];
  let originContent = selected.origin[origin];

  let realCard =
    origin !== Origin.BOARD
      ? G[origin][player][originContent]
      : G[origin][selected.y][selected.x].cards[originContent];

  if (selected && selected.card.id === realCard.id) {
    return true;
  } else {
    return false;
  }
};

export const attackCard = (G, ctx, tile, targetTile, index = 0) => {};

export const flipCard = (G, ctx, place, index = 0) => {
  let card = getTileCard(G.board, place, index);
  card.flipped = !card.flipped;
};

export const invertCard = (G, ctx, place, index = 0) => {
  let card = getTileCard(G.board, place, index);
  card.inversed = !card.inversed;
};

export const activateCard = (G, ctx, tile, index = 0) => {};

export const openStatsMenu = (card) => {};

export const tickCard = (card) => {};

export const bounceCard = (G, ctx, place, index = 0) => {
  let card = resetStats(getTileCard(G.board, place, index));
  let cardList = getTileCardsArray(G.board, place);
  G.hand[ctx.playerID].push(card);
  cardList.splice(index, 1);
};

export const destroyCard = (G, ctx, place, index = 0) => {
  let card = resetStats(getTileCard(G.board, place, index));
  let cardList = getTileCardsArray(G.board, place);
  G.destroyZone[ctx.playerID].push(card);
  cardList.splice(index, 1);
};

export const finishCard = (G, ctx, place, index = 0) => {
  let card = resetStats(getTileCard(G.board, place, index));
  let cardList = getTileCardsArray(G.board, place);
  G.out.push(card);
  cardList.splice(index, 1);
};

export const attachArtifact = (G, ctx, place, index = 0) => {};

export const tileCardToBack = (G, ctx, place, index = 0) => {
  let cardList = getTileCardsArray(G.board, place);
  cardList.push(cardList.splice(index, 1)[0]);
};

export const tileCardToFront = (G, ctx, place, index = 0) => {
  let cardList = getTileCardsArray(G.board, place);
  cardList.unshift(cardList.splice(index, 1)[0]);
};

const getTileCardsArray = (board, place) => {
  return board[place.y][place.x].cards;
};

const getTileCard = (board, place, index) => {
  return board[place.y][place.x].cards[index];
};

//CLIENT

export const moveInBoard = (board, place, index = 0) => {
  let origin = {};
  origin[Origin.BOARD] = index;
  let card = getTileCard(board, place, index);
  return Temp(origin, card, card.flipped, place.x, place.y);
};

const BoardActions = (card, id, place) => {
  return card.controller === id || !card.inversed
    ? [
        Action("Move", moveInBoard.name, [place]),
        Action("Attack", attackCard.name),
        Action("Flip", flipCard.name, [place]),
        Action("Invert", invertCard.name, [place]),
        //Action("Activate", activateCard.name),
        Action("Set Stats", openStatsMenu.name),
        //Action("Tick", tickCard.name),
        Action("Bounce", bounceCard.name, [place]),
        Action("Destroy", destroyCard.name, [place]),
        Action("Finish", finishCard.name, [place]),
      ]
    : [];
};

const getMultipleCardBoardActions = (tile, id) => {
  let card = tile.cards[0];
  let place = Place(tile.originalX, tile.originalY);
  let actions = [Action("Check all Cards", getTileCardsList.name, [tile])];
  if (card.controller === id) {
    let extra = [
      Action("Put card in back", tileCardToBack.name, [place]),
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
    actions.push(...BoardActions(tile.cards[0], id, place));
  } else if (tile.cards.length > 0) {
    actions.push(...BoardActions(tile.cards[0], id, place));
  }
  return MenuData(event.pageX, event.pageY, actions);
};

export const getTileCardsList = (tile) => {
  let place = Place(tile.originalX, tile.originalY);
  let actions = [
    Action("To Top", tileCardToFront.name),
    Action("To Back", tileCardToBack.name),
    //Action("Attach Card", attachArtifact.name),
    Action("Bounce", bounceCard.name, [place]),
    Action("Destroy", destroyCard.name, [place]),
    Action("Finish", finishCard.name, [place]),
  ];
  return MenuListData(Strings.boardHeader, tile.cards, actions);
};

export default getBoardActionMenu;
