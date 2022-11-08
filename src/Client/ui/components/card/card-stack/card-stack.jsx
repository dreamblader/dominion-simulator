import React from "react";
import PropTypes from "prop-types";
import Card from "../card";
import CardModel from "models/game-pieces/card";
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

  const isDisabled = (index) => {
    return disabled || index + 1 < itemsView().length;
  };

  const clickHandler = (e) => {
    if (typeof click === "function" && !disabled && !isEmpty(items)) {
      click(e);
    }
  };

  const itemsView = () => {
    const stackTreshold = 5;

    if (items.length >= stackTreshold) {
      const start = items.length - stackTreshold;
      const end = items.length;
      return [...items].slice(start, end);
    } else if (items.length <= 0) {
      return [CardModel(-1, -1)];
    } else {
      return items;
    }
  };

  return (
    <div className="card-stack">
      {itemsView().map((item, index) => {
        let offsetX = 0.5 * index;
        let offsetY = offsetX / 2;
        return (
          <Card
            key={index}
            card={isFlipped ? null : item}
            extraClass={extraClasses}
            style={{
              transform: `translate(${offsetX}rem, -${offsetY}rem)`,
            }}
            click={(e) => clickHandler(e)}
          >
            {index === itemsView().length - 1 && (
              <div className="counter">{items.length}</div>
            )}
          </Card>
        );
      })}
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
