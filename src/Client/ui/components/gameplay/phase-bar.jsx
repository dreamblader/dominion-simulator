import React from "react";
import PropTypes from "prop-types";
import Consts from "utils/consts";
import "../../styles/phase-bar.css";

const PhaseBar = ({ turn }) => {
  let [current, setCurrent] = React.useState(0);

  let phases = Consts.phases;
  let percentage = `${100 - ((current + 1) / phases.length) * 100}%`;
  let disabled = turn ? "" : "disabled";

  const setPhase = (index) => {
    //TODO actually apply this to G so all players can see this change
    if (turn) {
      setCurrent(index);
    }
  };

  return (
    <div className="phase-container">
      <div className="phase-bar">
        <div className="fill" style={{ height: percentage }} />
      </div>
      <div className="phases-text">
        {phases.map((phase, index) => {
          let select = index === current ? "select" : "";
          return (
            <div
              className={`phase ${disabled} ${select}`}
              key={index}
              onClick={() => {
                setPhase(index);
              }}
            >
              {phase}
            </div>
          );
        })}
      </div>
    </div>
  );
};

PhaseBar.propTypes = {
  //TODO
};

export default PhaseBar;
