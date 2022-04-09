import Tick from "./tick-object";
import icon from "../../Client/ui/images/ticks/stats-up.png";

const event = (card) => {};

const StatusUp = Tick(
  "Status Up",
  event,
  icon,
  "This card status are temporary augmented by an effect."
);

export default StatusUp;
