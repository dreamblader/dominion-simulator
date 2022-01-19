import Action from "models/action";
import ServerActions from "Server/actions/hand";
import MenuData from "models/menu";
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
    Action("Back to Top of the Deck", ServerActions.backToTopDeck.name, [pos]),
    Action("Back to Bottom of the Deck", ServerActions.backToBottomDeck.name, [
      pos,
    ]),
    Action("SPAWN Face-up", spawnFaceUp.name, [hand, myID, pos]),
    Action("SPAWN Face-down", spawnFaceDown.name, [hand, myID, pos]),
    Action("Destroy", ServerActions.destroy.name, [pos]),
    Action("Put OUT OF GAME", ServerActions.finish.name, [pos]),
  ];
  return MenuData(event.pageX, event.pageY, actions);
};

const HandActions = {
  spawnFaceUp,
  spawnFaceDown,
  getHandActionsOnMenu,
};

export default HandActions;
