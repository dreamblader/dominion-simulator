import { moveToArray } from "../utils/help";
import Action from "../models/action";
import MenuListData from "../models/menu-list";
import Strings from "../utils/strings";

export const recycle = (G, ctx, index) => {
  let placeID = G.out[index].controller;
  moveToArray(G.out, G.destroyZone[placeID], index);
};

//CLIENT
const getOOGForSearch = (out) => {
  let actions = [Action("Recycle", recycle.name)];
  return MenuListData(Strings.oogHeader, out, actions);
};

export default getOOGForSearch;
