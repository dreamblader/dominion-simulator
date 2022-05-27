import PropTypes from "prop-types";
import React from "react";
import Tick from "./tick";
import infinite from "../../images/display/infinite.png";
import "../../styles/tick-label.css";

const TickLabel = ({ content, click }) => {
  return (
    <div
      className="tick-label"
      onClick={() => {
        if (click) {
          click(content);
        }
      }}
    >
      {content.duration > 0 ? (
        <h3>{content.duration}</h3>
      ) : (
        <img src={infinite} />
      )}
      <h3>x</h3>
      <Tick content={content} extraClass="disabled" click={click} />
    </div>
  );
};

TickLabel.propTypes = {
  content: PropTypes.object,
  click: PropTypes.func,
};

export default TickLabel;
