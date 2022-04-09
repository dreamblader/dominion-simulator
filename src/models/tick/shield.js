import Tick from "./tick-object";
import icon from "../../Client/ui/images/ticks/shield.png";

const event = (card) => {};

const Shield = Tick(
  "Shield",
  event,
  icon,
  "Any BATTLE DMG against this card is reduced to 0 and destroy this status."
);

export default Shield;
