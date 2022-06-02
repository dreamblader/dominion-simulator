import React from "react";
import PropTypes from "prop-types";
import Consts from "utils/consts";
import "../../styles/phase-bar.css";

const PhaseBar = ({ turn, action, stage }) => {
  let phases = Consts.phases;
  let current = phases.indexOf(stage);
  let percentage = `${100 - ((current + 1) / phases.length) * 100}%`;
  let disabled = turn ? "" : "disabled";
  let inverse = turn ? "" : "inversed";

  const setPhase = (index) => {
    if (turn) {
      action(phases[index]);
    }
  };

  return (
    <div className="phase-container">
      <div className={`phase-bar ${inverse}`}>
        <div className="fill" style={{ height: percentage }} />
      </div>
      <ol className="phases-text">
        {phases.map((phase, index) => {
          let select = index === current ? "select" : "";
          return (
            <li
              className={`phase ${disabled} ${select}`}
              key={index}
              onClick={() => {
                setPhase(index);
              }}
            >
              {phase}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

PhaseBar.propTypes = {
  turn: PropTypes.bool,
  action: PropTypes.func,
  stage: PropTypes.string,
};

export default PhaseBar;
