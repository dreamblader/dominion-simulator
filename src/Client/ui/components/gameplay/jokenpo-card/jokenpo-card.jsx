import React from "react";
import PropTypes from "prop-types";
import Rock from "Client/ui/images/misc/rock.png";
import Paper from "Client/ui/images/misc/paper.png";
import Scissor from "Client/ui/images/misc/scissors.png";
import Button from "Client/ui/components/general/button";
import { capitalize } from "utils/help";
import "./jokenpo-card-style.css";
import { JokenpoType } from "models/jokenpo";

const JokenpoCard = ({ hand, click, extraClass = "", disabled = false }) => {
  const getImage = () => {
    switch (hand) {
      case JokenpoType.ROCK:
        return Rock;
      case JokenpoType.PAPER:
        return Paper;
      case JokenpoType.SCISSORS:
        return Scissor;
      default:
        return "";
    }
  };

  return (
    <div className={`jokenpo-card ${extraClass}`}>
      {!disabled && <h3>{capitalize(hand)}</h3>}
      <Button
        click={() => click(hand)}
        extraClass={disabled ? " disabled" : ""}
      >
        <img src={getImage()} />
      </Button>
    </div>
  );
};

JokenpoCard.propTypes = {
  hand: PropTypes.string,
  click: PropTypes.func,
  extraClass: PropTypes.string,
};

export default JokenpoCard;
