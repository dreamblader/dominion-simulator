import Tick from "./tick-object";
import icon from "../../Client/ui/images/ticks/cooldown.png";
import { TickType } from "./tick-object";

const event = (card) => {};

const Cooldown = Tick(
  "Cooldown",
  TickType.NEUTRAL,
  event,
  icon,
  "This card cannot apply it effect again until this reaches zero"
);

export default Cooldown;
