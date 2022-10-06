import React from "react";
import PropTypes from "prop-types";
import Card from "../card";
import { isEmpty } from "utils/help";
import { getExtraClasses, ClassNames } from "utils/style-class";
import "./card-stack-style.css";

const CardStack = ({
  items,
  click,
  isInverted = false,
  disabled = false,
  isSelected = false,
  isFlipped = false,
}) => {
  const extraClasses = getExtraClasses(
    [disabled, isInverted, isSelected, isEmpty(items)],
    [
      ClassNames.DISABLED,
      ClassNames.INVERTED,
      ClassNames.SELECTED,
      ClassNames.NO_COVER,
    ]
  );

  const clickHandler = () => {
    if (typeof click === "function" && !disabled && !isEmpty(items)) {
      click();
    }
  };

  const trimmedItems = items.length < 5 ? items : items.reverse().slice(0, 5);

  //TODO card stack need to stack everything at same place and drift a little to the rigth
  return (
    <div className="card-stack">
      {trimmedItems.map((item, index) => {
        let offsetX = 0.5 * index;
        let offsetY = offsetX / 2;
        return (
          <Card
            card={isFlipped ? null : item}
            extraClass={extraClasses}
            style={{
              transform: `translate(${offsetX}rem, -${offsetY}rem)`,
            }}
            click={() => clickHandler()}
          />
        );
      })}
      <div className="counter">{items.length}</div>
    </div>
  );
};

CardStack.propTypes = {
  items: PropTypes.array,
  click: PropTypes.func,
  isInverted: PropTypes.bool,
  disabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  isFlipped: PropTypes.bool,
};

export default CardStack;
