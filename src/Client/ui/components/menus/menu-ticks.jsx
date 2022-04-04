import Ticks from "models/tick/tick";
import Tick from "../general/tick";
import Button from "../general/button";
import MenuHeader from "./menu-header";
import React from "react";
import "../../styles/menu-ticks.css";

const MenuTicks = ({ content, clear }) => {
  const { tick, index } = content;
  const applyStats = () => {};

  const tickClick = (tick) => {
    console.log("Clicked: " + tick);
  };

  return (
    <div className="menu-tick-container">
      <MenuHeader header="Ticks Menu" clear={clear} />
      <div className="menu-tick">
        <Tick content={Ticks.CONDITION.BURN} click={tickClick} />
        <Button click={() => applyStats()}>Apply</Button>
      </div>
    </div>
  );
};

MenuTicks.propTypes = {};

export default MenuTicks;
