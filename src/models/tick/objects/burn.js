import Tick from "../tick-object";
import icon from "Client/ui/images/ticks/fire.png";
import { TickType } from "../tick-object";

const Burn = Tick("Burn", TickType.AFFLICTIONS, icon, "Lose 1 HP Every TICK");

export default Burn;
