import React from "react";
import PropTypes from "prop-types";
import CardArt from "./card-art";
import { orNothing } from "utils/help";
import "Client/ui/styles/card.css";

const Card = ({ card, highlight, extraClass, click, style = {}, children }) => {
  const selectCard = () => {
    if (highlight && card) {
      highlight(card);
    }
  };

  const checkAndRender = () => {
    if (card) {
      let reveal = typeof card.flipped !== "undefined" ? !card.flipped : false;
      return <CardArt card={card} reveal={reveal} />;
    }
  };

  return (
    <div
      className={`hoverable card-holder ` + orNothing(extraClass)}
      style={style}
      onClick={click}
      onMouseEnter={(e) => selectCard()}
    >
      {checkAndRender()}
      {children}
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  highlight: PropTypes.func,
  extraClass: PropTypes.string,
  click: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Card;
