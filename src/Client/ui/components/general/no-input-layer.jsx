import React from "react";
import PropTypes from "prop-types";
import "../../styles/no-input-layer.css";

const NoInputLayer = ({ fullscreen = false, children }) => {
  const full = fullscreen ? "full" : "";

  return <div className={`no-input ${full}`}>{children}</div>;
};

NoInputLayer.propTypes = {
  children: PropTypes.node,
};

export default NoInputLayer;
