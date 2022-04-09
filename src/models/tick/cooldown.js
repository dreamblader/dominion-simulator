import Tick from "./tick-object";
import icon from "../../Client/ui/images/ticks/cooldown.png";

const event = (card) => {};

const Cooldown = Tick(
  "Cooldown",
  event,
  icon,
  "This card cannot apply it effect again until this reaches zero"
);

export default Cooldown;
