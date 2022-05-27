import Ticks, { combineTicks } from "models/tick/tick";
import Tick from "../general/tick";
import Button from "../general/button";
import MenuHeader from "./menu-header";
import NumberInput from "../general/number-input";
import React from "react";
import Checkbox from "../general/checkbox";
import PropTypes from "prop-types";
import { stripEvent } from "models/tick/tick";
import { safeSplice } from "utils/help";
import "../../styles/menu-ticks.css";

const MenuTicks = ({ content, clear, set }) => {
  const { tick, index, card } = content;
  const [selectedTick, setSelectedTick] = React.useState(
    tick ?? Object.values(Object.values(Ticks)[0])[0]
  );
  const [duration, setDuration] = React.useState(0);

  const applyStats = () => {
    let newTick = stripEvent(selectedTick);
    let newIndex = -1;
    newTick.duration = duration;
    if (index >= card.status.length) {
      let sameTickIndex = card.status.findIndex(
        (tick) => tick.name === newTick.name
      );
      if (sameTickIndex > -1) {
        newTick = combineTicks(card.status[sameTickIndex], newTick);
        card.status = safeSplice(card.status, sameTickIndex);
        newIndex = card.status.length;
      }
    }
    newIndex = newIndex > -1 ? newIndex : index;
    card.status[newIndex] = newTick;
    set(card);
    clear();
  };

  const removeStats = () => {
    card.status = safeSplice(card.status, index);
    set(card);
    clear();
  };

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
          {Object.keys(Ticks).map((key) => {
            let tick = Ticks[key];
            let selected = tick.name === selectedTick.name ? "selected" : "";
            return (
              <Tick
                key={tick.name}
                extraClass={selected}
                content={tick}
                click={tickClick}
              />
            );
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

MenuTicks.propTypes = {
  content: PropTypes.object,
  clear: PropTypes.func,
  action: PropTypes.func,
};

export default MenuTicks;
