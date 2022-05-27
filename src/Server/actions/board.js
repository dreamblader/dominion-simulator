import Place from "../../models/place";
import { Origin, Types } from "../../models/enums";
import {
  getTileCard,
  getTileCardsArray,
  noneToBoard,
  originToBoard,
} from "../../utils/board";
import Combat from "../../models/combat";
import TickEvents from "../../models/tick/tick-events";
import MenuRevealData from "../../models/menu/menu-reveal";
import { resetStats } from "../../utils/card";
import { pushToReveal } from "../../utils/menu";
import { safeSplice } from "../../utils/help";

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
  let place = Place(x, y);
  let originName = Object.keys(selected.origin)[0];

  if (originName === Origin.NONE) {
    noneToBoard(G, selected.card, place);
  } else {
    if (checkSelection(G, selected, ctx.playerID)) {
      let originIndex = selected.origin[originName];
      if (selected.flipped && originName !== Origin.BOARD) {
        selected.card.flipped = selected.flipped;
        G[originName][ctx.playerID][originIndex] = selected.card;
      }
      let origin =
        originName !== Origin.BOARD
          ? G[originName][ctx.playerID]
          : G[originName][selected.y][selected.x].cards;
      originToBoard(G, origin, originIndex, place);
    }
  }
};

const applyStats = (G, ctx, place, modCard, index = 0) => {
  let cardList = getTileCardsArray(G.board, place);
  cardList[index] = modCard;
};

const attackCard = (G, ctx, combatInfo) => {
  G.combat = Combat();
  G.combat = combatInfo;
};

const flipCard = (G, ctx, place, index = 0) => {
  let card = getTileCard(G.board, place, index);
  card.flipped = !card.flipped;
};

const invertCard = (G, ctx, place, index = 0) => {
  let card = getTileCard(G.board, place, index);
  card.inversed = !card.inversed;
};

const activateCard = (G, ctx, place, index = 0) => {
  let content = getTileCard(G.board, place, index);
  let topText = `Your opponent have declared ${content.title} effect`;
  G.reveal = pushToReveal(
    G.reveal,
    MenuRevealData(topText, content),
    parseInt(ctx.playerID)
  );
};

const tickCard = (G, ctx, place, index = 0) => {
  let card = getTileCard(G.board, place, index);
  card.status.forEach((tick, index) => {
    if (tick.duration > 0) {
      TickEvents[tick.name.toUpperCase()](card);
      tick.duration--;
      if (tick.duration === 0) {
        card.status = safeSplice(card.status, index);
      }
    }
  });
};

const bounceCard = (G, ctx, place, index = 0) => {
  removeBoardCardTo(G.board, G.hand[ctx.playerID], place, index);
};

const destroyCard = (G, ctx, place, index = 0) => {
  removeBoardCardTo(G.board, G.destroyZone[ctx.playerID], place, index);
};

const finishCard = (G, ctx, place, index = 0) => {
  removeBoardCardTo(G.board, G.out, place, index);
};

const removeBoardCardTo = (board, to, from, index) => {
  let card = resetStats(getTileCard(board, from, index));
  let cardList = getTileCardsArray(board, from);
  if (card.type !== Types.TOKEN) {
    to.push(card);
  }
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
  applyStats,
  activateCard,
  tickCard,
  bounceCard,
  destroyCard,
  finishCard,
  attachArtifact,
  tileCardToBack,
  tileCardToFront,
};

export default BoardActions;
