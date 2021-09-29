import Place from "../models/place";
import { toBoard } from "../utils/help";

export const placeInHere = (G, ctx, x, y) => {
  if (checkSelection(G, ctx.currentPlayer)) {
    let place = Place(x, y);
    let originName = Object.keys(G.selectToBoard.origin)[0];
    let originIndex = G.selectToBoard.origin[originName];
    let origin = G[originName][ctx.currentPlayer];
    toBoard(G, origin, originIndex, place);
  }
};

const checkSelection = (G, player) => {
  let selected = G.selectToBoard;
  let origin = Object.keys(selected.origin)[0];
  let originContent = selected.origin[origin];
  let realCard = G[origin][player][originContent];

  if (selected && selected.card.id === realCard.id) {
    return true;
  } else {
    G.selectToBoard = null;
    return false;
  }
};
