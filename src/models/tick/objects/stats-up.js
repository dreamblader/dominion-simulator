import Tick from "../tick-object";
import icon from "Client/ui/images/ticks/stats-up.png";
import { TickType } from "../tick-object";

const StatusUp = Tick(
  "Status Up",
  TickType.BLESSINGS,
  icon,
  "This card status are temporary augmented by an effect."
);

export default StatusUp;
