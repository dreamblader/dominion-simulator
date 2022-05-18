import Tick from "./tick-object";
import icon from "../../Client/ui/images/ticks/shield.png";
import { TickType } from "./tick-object";

const event = (card) => {};

const Shield = Tick(
  "Shield",
  TickType.BLESSINGS,
  icon,
  "Any BATTLE DMG against this card is reduced to 0 and destroy this status."
);

export default Shield;
