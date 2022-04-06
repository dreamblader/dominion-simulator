import React from "react";
import PropTypes from "prop-types";
import "../../styles/button.css";

const Checkbox = ({ value, action, label }) => (
  <div className="input-container">
    <input type="checkbox" checked={value} onChange={(e) => action(e)} />
    <p>{label}</p>
  </div>
);

Checkbox.propTypes = {
  value: PropTypes.bool,
  action: PropTypes.func,
  label: PropTypes.string,
};

export default Checkbox;
