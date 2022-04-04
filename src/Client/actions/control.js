import Temp from "models/temp-select";
import { createTokenCard } from "models/game-pieces/card";
import { Origin } from "models/enums";

const createToken = (playerId) => {
  let origin = {};
  origin[Origin.NONE] = 0;
  let card = createTokenCard(playerId);
  return Temp(origin, card, card.flipped);
};

const ControlActions = {
  createToken,
};

export default ControlActions;
