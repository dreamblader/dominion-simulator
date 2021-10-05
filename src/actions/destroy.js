import { moveToArray } from "../utils/help";
import Action from "../models/action";
import Strings from "../utils/strings";
import MenuListData from "../models/menu-list";

export const reborn = (G, ctx, index) => {};

export const backToHand = (G, ctx, index) => {
  moveToArray(G.destroyZone[ctx.playerID], G.hand[ctx.playerID], index);
};

export const destroyToOOG = (G, ctx, index) => {
  moveToArray(G.destroyZone[ctx.playerID], G.out, index);
};

//CLIENT

const getDZForSearch = (G, id, mine) => {
  let header = mine ? Strings.myDZHeader : Strings.rivalDZHeader;
  let actions = mine
    ? [
        //Action("Reborn", reborn.name)
        Action("To Hand", backToHand.name),
        Action("To OOG", destroyToOOG.name),
      ]
    : [];
  return MenuListData(header, G.destroyZone[id], actions);
};

export default getDZForSearch;
