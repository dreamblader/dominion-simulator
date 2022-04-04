import Tick from "./tick-object";
import icon from "../../Client/ui/images/ticks/fire.png";

const event = (card) => {
  card.hp_mod--;
};

const Burn = Tick("Burn", event, icon, "Lose 1 HP Every TICK");

export default Burn;
