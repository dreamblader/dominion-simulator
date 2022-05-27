import Tick from "../tick-object";
import icon from "Client/ui/images/ticks/cooldown.png";
import { TickType } from "../tick-object";

const Cooldown = Tick(
  "Cooldown",
  TickType.NEUTRAL,
  icon,
  "This card cannot apply it effect again until this reaches zero"
);

export default Cooldown;
