import Place from "../../models/place";
import { Origin } from "../../models/enums";
import { getTileCard, getTileCardsArray, toBoard } from "../../utils/board";
import { resetStats } from "../../utils/card";

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

const placeInHere = (G, ctx, selected, x, y) => {
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

const attackCard = (G, ctx, tile, targetTile, index = 0) => {};

const flipCard = (G, ctx, place, index = 0) => {
  let card = getTileCard(G.board, place, index);
  card.flipped = !card.flipped;
};

const invertCard = (G, ctx, place, index = 0) => {
  let card = getTileCard(G.board, place, index);
  card.inversed = !card.inversed;
};

const activateCard = (G, ctx, tile, index = 0) => {};

const openStatsMenu = (card) => {};

const tickCard = (card) => {};

const bounceCard = (G, ctx, place, index = 0) => {
  let card = resetStats(getTileCard(G.board, place, index));
  let cardList = getTileCardsArray(G.board, place);
  G.hand[ctx.playerID].push(card);
  cardList.splice(index, 1);
};

const destroyCard = (G, ctx, place, index = 0) => {
  let card = resetStats(getTileCard(G.board, place, index));
  let cardList = getTileCardsArray(G.board, place);
  G.destroyZone[ctx.playerID].push(card);
  cardList.splice(index, 1);
};

const finishCard = (G, ctx, place, index = 0) => {
  let card = resetStats(getTileCard(G.board, place, index));
  let cardList = getTileCardsArray(G.board, place);
  G.out.push(card);
  cardList.splice(index, 1);
};

const attachArtifact = (G, ctx, place, index = 0) => {};

const tileCardToBack = (G, ctx, place, index = 0) => {
  let cardList = getTileCardsArray(G.board, place);
  cardList.push(cardList.splice(index, 1)[0]);
};

const tileCardToFront = (G, ctx, place, index = 0) => {
  let cardList = getTileCardsArray(G.board, place);
  cardList.unshift(cardList.splice(index, 1)[0]);
};

const BoardActions = {
  placeInHere,
  attackCard,
  flipCard,
  invertCard,
  activateCard,
  openStatsMenu,
  tickCard,
  bounceCard,
  destroyCard,
  finishCard,
  attachArtifact,
  tileCardToBack,
  tileCardToFront,
};

export default BoardActions;
