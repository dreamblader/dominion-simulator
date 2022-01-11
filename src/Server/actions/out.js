import { moveToArray } from "../../utils/help";

const recycle = (G, ctx, index) => {
  let placeID = G.out[index].controller;
  moveToArray(G.out, G.destroyZone[placeID], index);
};

const OutActions = {
  recycle,
};

export default OutActions;
