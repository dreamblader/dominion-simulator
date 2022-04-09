import Tick from "./tick-object";
import icon from "../../Client/ui/images/ticks/stun.png";

const event = (card) => {};

const Stun = Tick(
  "Stun",
  event,
  icon,
  "This card cannot do any ACTIONS with this status."
);

export default Stun;
