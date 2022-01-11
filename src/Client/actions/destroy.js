import ServerActions from "Server/actions/destroy";
import Temp from "models/temp-select";
import { Origin } from "models/enums";
import Action from "models/action";
import MenuListData from "models/menu-list";
import Strings from "utils/strings";

const reborn = (dz, myID, index) => {
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
        Action("To Hand", ServerActions.backToHand.name),
        Action("To OOG", ServerActions.destroyToOOG.name),
      ]
    : [];
  return MenuListData(header, G.destroyZone[id], actions);
};

const DestroyActions = {
  reborn,
  getDZForSearch,
};

export default DestroyActions;
