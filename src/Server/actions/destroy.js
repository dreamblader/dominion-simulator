import { moveToArray } from "../../utils/help";
import Temp from "../../models/temp-select";
import { Origin } from "../../models/enums";
import Action from "../../models/action";
import Strings from "../../utils/strings";
import MenuListData from "../../models/menu-list";

export const backToHand = (G, ctx, index) => {
  moveToArray(G.destroyZone[ctx.playerID], G.hand[ctx.playerID], index);
};

export const destroyToOOG = (G, ctx, index) => {
  moveToArray(G.destroyZone[ctx.playerID], G.out, index);
};

//CLIENT
export const reborn = (dz, myID, index) => {
  return selectToField(dz, myID, index);
};

const selectToField = (dz, myID, index) => {
  let origin = {};
  origin[Origin.DZ] = index;
  let card = dz[myID][index];
  return Temp(origin, card);
};

const getDZForSearch = (G, id, mine) => {
  let header = mine ? Strings.myDZHeader : Strings.rivalDZHeader;
  let actions = mine
    ? [
        Action("Reborn", reborn.name, [G.destroyZone, id]),
        Action("To Hand", backToHand.name),
        Action("To OOG", destroyToOOG.name),
      ]
    : [];
  return MenuListData(header, G.destroyZone[id], actions);
};

export default getDZForSearch;
