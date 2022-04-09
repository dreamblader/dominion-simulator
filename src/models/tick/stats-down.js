import Tick from "./tick-object";
import icon from "../../Client/ui/images/ticks/stats-down.png";

const event = (card) => {};

const StatusDown = Tick(
  "Status Down",
  event,
  icon,
  "This card status are temporary decreased by an effect."
);

export default StatusDown;
