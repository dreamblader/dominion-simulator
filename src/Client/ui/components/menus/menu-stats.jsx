import { Types } from "models/enums";
import React from "react";
import NumberInput from "../general/number-input";
import Button from "../general/button";
import MenuHeader from "./menu-header";
import CardArt from "../card/card-art";
import {
  getCurentATK,
  getCurentHP,
  getCurrentRange,
  setStats,
} from "utils/card";
import "../../styles/menu-stats.css";
import NoInputLayer from "../general/no-input-layer";
import MenuTicks from "./menu-ticks";
import MenuTickData from "models/menu/menu-tick";

const MenuStats = ({ data, highlight, apply, clear }) => {
  const { place, card, index } = data;
  const cardName = card.type !== Types.TOKEN ? card.title : Types.TOKEN;
  const [tickMenu, setTickMenu] = React.useState(null);
  const [atk, setCardAtk] = React.useState(getCurentATK(card));
  const [hp, setCardHP] = React.useState(getCurentHP(card));
  const [range, setCardRange] = React.useState(getCurrentRange(card));
  const [isRangeEnable, setIsRangeEnable] = React.useState(
    getCurrentRange(card) !== 0
  );

  const rangeCheck = (e) => {
    setIsRangeEnable(e.target.checked);
  };

  const tickMenuClear = () => {
    setTickMenu(null);
  };

  const applyStats = () => {
    let getRange = isRangeEnable ? range : getCurrentRange(card);
    let stats = { atk, hp, range: getRange };
    apply(place, stats, index);
    highlight(setStats(card, stats));
    clear();
  };

  const addTick = () => {
    let content = MenuTickData(null, card.status.length);
    setTickMenu(content);
  };

  return (
    <NoInputLayer>
      {tickMenu && (
        <NoInputLayer>
          <MenuTicks content={tickMenu} clear={tickMenuClear} />
        </NoInputLayer>
      )}
      <div className="menu-stats-container">
        <MenuHeader header={`${cardName} Status`} clear={clear} />
        <div className="menu-stats">
          <div className="column">
            <CardArt card={card} />
          </div>
          <div className="column">
            <h3>Atack:</h3>
            <NumberInput value={atk} setValue={setCardAtk} />
            <h3>Life:</h3>
            <NumberInput value={hp} setValue={setCardHP} />
            <div className="input-container">
              <input
                type="checkbox"
                checked={isRangeEnable}
                onChange={(e) => rangeCheck(e)}
              />
              <p>Set Card Range</p>
            </div>
            {isRangeEnable && (
              <React.Fragment>
                <h3>Range:</h3>
                <NumberInput value={range} setValue={setCardRange} />
              </React.Fragment>
            )}
            <div className="status-container">
              <Button click={() => addTick()}>+</Button>
            </div>
          </div>
        </div>
        <Button click={() => applyStats()}>Apply</Button>
      </div>
    </NoInputLayer>
  );
};

MenuStats.propTypes = {};

export default MenuStats;
