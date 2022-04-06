import Ticks from "models/tick/tick";
import Tick from "../general/tick";
import Button from "../general/button";
import MenuHeader from "./menu-header";
import NumberInput from "../general/number-input";
import React from "react";
import "../../styles/menu-ticks.css";
import Checkbox from "../general/checkbox";

const MenuTicks = ({ content, clear }) => {
  const { tick, index } = content;
  const [duration, setDuration] = React.useState(0);
  const applyStats = () => {};

  const tickClick = (tick) => {
    console.log("Clicked: " + tick);
  };

  const foreverCheck = (e) => {
    setDuration(e.target.checked ? -1 : 0);
  };

  return (
    <div className="menu-tick-container">
      <MenuHeader header="Ticks Menu" clear={clear} />
      <div className="menu-tick">
        <div className="tick-display">
          <Tick content={Ticks.CONDITION.BURN} click={tickClick} />
        </div>
        <div className="input-container">
          <Checkbox
            value={duration < 0}
            action={foreverCheck}
            label="Forever"
          />
          {duration >= 0 && (
            <NumberInput value={duration} setValue={setDuration} />
          )}
        </div>
        <Button click={() => applyStats()}>Apply</Button>
      </div>
    </div>
  );
};

MenuTicks.propTypes = {};

export default MenuTicks;
