import { Types } from "models/enums";
import React from "react";
import NumberInput from "../general/number-input";
import Button from "../general/button";
import MenuHeader from "./menu-header";
import CardArt from "../card/card-art";
import { getCurrentATK, getCurrentHP, getCurrentRange } from "utils/card";
import PropTypes from "prop-types";
import NoInputLayer from "../general/no-input-layer";
import MenuTicks from "./menu-ticks";
import MenuTickData from "models/menu/menu-tick";
import Checkbox from "../general/checkbox";
import "../../styles/menu-stats.css";
import TickLabel from "../general/tick-label";

const MenuStats = ({ data, highlight, apply, clear }) => {
  const { place, index } = data;
  const [tickMenu, setTickMenu] = React.useState(null);
  const [card, setCard] = React.useState(data.card);
  const [isRangeEnable, setIsRangeEnable] = React.useState(
    getCurrentRange(card) !== 0
  );

  const cardName = card.type !== Types.TOKEN ? card.title : Types.TOKEN;

  const rangeCheck = (e) => {
    let check = e.target.checked;
    setIsRangeEnable(check);
    if (!check) {
      setRange(0);
    }
  };

  const tickMenuClear = () => {
    setTickMenu(null);
  };

  const applyStats = () => {
    apply(place, card, index);
    highlight(card);
    clear();
  };

  const addTick = () => {
    let content = MenuTickData(null, card.status.length, card);
    setTickMenu(content);
  };

  const editTick = (tick, index) => {
    let content = MenuTickData(tick, index, card);
    setTickMenu(content);
  };

  const setATK = (atk) => {
    let temp = { ...card };
    temp.atk_mod = atk - card.atk;
    setCard(temp);
  };

  const setHP = (hp) => {
    let temp = { ...card };
    temp.hp_mod = hp - card.hp;
    setCard(temp);
  };

  const setRange = (range) => {
    let temp = { ...card };
    temp.range_mod = range - card.range;
    setCard(temp);
  };

  return (
    <NoInputLayer>
      {tickMenu && (
        <NoInputLayer>
          <MenuTicks content={tickMenu} clear={tickMenuClear} set={setCard} />
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
            <NumberInput value={getCurrentATK(card)} setValue={setATK} />
            <h3>Life:</h3>
            <NumberInput value={getCurrentHP(card)} setValue={setHP} />
            <Checkbox
              value={isRangeEnable}
              action={rangeCheck}
              label="Set Card Range"
            />

            {isRangeEnable && (
              <React.Fragment>
                <h3>Range:</h3>
                <NumberInput
                  value={getCurrentRange(card)}
                  setValue={setRange}
                />
              </React.Fragment>
            )}
            <div className="status-container">
              {card.status.map((tick, index) => (
                <TickLabel
                  content={tick}
                  click={(tick) => editTick(tick, index)}
                />
              ))}
              <Button click={() => addTick()}>+</Button>
            </div>
          </div>
        </div>
        <Button click={() => applyStats()}>Apply</Button>
      </div>
    </NoInputLayer>
  );
};

MenuStats.propTypes = {
  data: PropTypes.object,
  highlight: PropTypes.func,
  apply: PropTypes.func,
  clear: PropTypes.func,
};

export default MenuStats;
