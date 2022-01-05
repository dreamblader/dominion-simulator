import React from "react";

// Style
import classes from "./CardComponent.module.css"

const CardComponent = props => {
  const { children, onClick, onMouseEnter } = props;

  return (
    <div
      className={classes.card}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </div>
  );
}

export default CardComponent;