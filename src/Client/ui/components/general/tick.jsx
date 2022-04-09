import Ticks from "models/tick/tick";
import PropTypes from "prop-types";
import React from "react";
import { orNothing } from "utils/help";
import "../../styles/ticks.css";

const Tick = ({ content, click, extraClass }) => {
  let className = "hoverable tick " + orNothing(extraClass);

  return (
    <div
      className={className}
      title={`${content.name}: ${content.description}`}
      onClick={() => click(content)}
    >
      <img src={content.icon} alt={content.name} />
    </div>
  );
};

Tick.propTypes = {
  content: PropTypes.object,
  click: PropTypes.func,
  extraClass: PropTypes.string,
};

export default Tick;
