import Tick from "./tick";

const Burn = Tick("Burn", event, "Lose 1 HP Every TICK");

const event = (card) => {
    card.hp_mod--;
}

export default Burn;