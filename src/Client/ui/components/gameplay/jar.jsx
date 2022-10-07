import React from "react";
import PropTypes from "prop-types";
import Icon from "../../images/display/oog-jar.png";
import { ClassNames } from "utils/style-class";
import "../../styles/jar.css";

const Jar = ({ click, disabled }) => {
  const extra = disabled ? ClassNames.DISABLED : "";
  return (
    <div className={`jar ${extra}`} onClick={click}>
      <img src={Icon} />
    </div>
  );
};

Jar.propTypes = {
  click: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Jar;
