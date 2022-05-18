import Action from "models/action";
import MenuData from "models/menu/menu";
import { Origin } from "models/enums";
import Temp from "models/temp-select";

const spawnFaceUp = (hand, myID, index) => {
  return selectToField(hand, myID, index, false);
};

const spawnFaceDown = (hand, myID, index) => {
  return selectToField(hand, myID, index, true);
};

const selectToField = (hand, myID, index, flipped) => {
  let origin = {};
  origin[Origin.HAND] = index;
  let card = hand[myID][index];
  return Temp(origin, card, flipped);
};

const getHandActionsOnMenu = (event, pos, hand, myID) => {
  let actions = [
    Action("SPAWN Face-up", "spawnFaceUp", [hand, myID, pos]),
    Action("SPAWN Face-down", "spawnFaceDown", [hand, myID, pos]),
    Action("Back to Top of the Deck", "backToTopDeck", [pos]),
    Action("Back to Bottom of the Deck", "backToBottomDeck", [pos]),
    Action("Destroy", "destroy", [pos]),
    Action("Put OUT OF GAME", "finish", [pos]),
  ];
  return MenuData(event.pageX, event.pageY, actions);
};

const HandActions = {
  spawnFaceUp,
  spawnFaceDown,
  getHandActionsOnMenu,
};

export default HandActions;
