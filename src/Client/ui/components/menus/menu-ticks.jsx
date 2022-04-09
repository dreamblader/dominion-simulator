import Ticks from "models/tick/tick";
import Tick from "../general/tick";
import Button from "../general/button";
import MenuHeader from "./menu-header";
import NumberInput from "../general/number-input";
import React from "react";
import Checkbox from "../general/checkbox";
import "../../styles/menu-ticks.css";

const MenuTicks = ({ content, clear }) => {
  const { tick, index } = content;
  const [selectedTick, setSelectedTick] = React.useState(
    Ticks.AFFLICTIONS.BURN
  );
  const [duration, setDuration] = React.useState(0);
  const applyStats = () => {};
  const removeStats = () => {};

  const tickClick = (tick) => {
    setSelectedTick(tick);
  };

  const foreverCheck = (e) => {
    setDuration(e.target.checked ? -1 : 0);
  };

  return (
    <div className="menu-tick-container">
      <MenuHeader header="Ticks Menu" clear={clear} />
      <div className="menu-tick">
        <div className="tick-display">
          {Object.keys(Ticks).map((type) => {
            return Object.keys(Ticks[type]).map((item) => {
              let selected =
                Ticks[type][item].name === selectedTick.name ? "selected" : "";
              console.log(selected);
              console.log(type);
              return (
                <Tick
                  extraClass={`${type.toLowerCase()} ${selected}`}
                  content={Ticks[type][item]}
                  click={tickClick}
                />
              );
            });
          })}
        </div>
        <h3>{selectedTick.name}</h3>
        <h4>Duration:</h4>
        <div className="input-container">
          <Checkbox
            value={duration < 0}
            action={foreverCheck}
            label={duration >= 0 ? "Forever?" : "Forever"}
          />
          {duration >= 0 && (
            <NumberInput value={duration} setValue={setDuration} />
          )}
        </div>
        <div className="input-container">
          <Button extraClass=" remove" click={() => removeStats()}>
            Remove
          </Button>
          <Button click={() => applyStats()}>Apply</Button>
        </div>
      </div>
    </div>
  );
};

MenuTicks.propTypes = {};

export default MenuTicks;
