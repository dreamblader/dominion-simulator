import Tick from "./tick-object";
import icon from "../../Client/ui/images/ticks/stun.png";
import { TickType } from "./tick-object";

const event = (card) => {};

const Stun = Tick(
  "Stun",
  TickType.AFFLICTIONS,
  event,
  icon,
  "This card cannot do any ACTIONS with this status."
);

export default Stun;
