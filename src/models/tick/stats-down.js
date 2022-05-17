import Tick from "./tick-object";
import icon from "../../Client/ui/images/ticks/stats-down.png";
import { TickType } from "./tick-object";

const event = (card) => {};

const StatusDown = Tick(
  "Status Down",
  TickType.AFFLICTIONS,
  event,
  icon,
  "This card status are temporary decreased by an effect."
);

export default StatusDown;
