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
