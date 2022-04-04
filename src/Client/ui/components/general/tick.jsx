import Ticks from "models/tick/tick";
import React from "react";
import "../../styles/ticks.css";

const Tick = ({ content, click }) => {
  return (
    <div
      className="hoverable tick"
      title={content.description}
      onClick={() => click(content)}
    >
      <img src={content.icon} alt={content.name} />
    </div>
  );
};

export default Tick;
