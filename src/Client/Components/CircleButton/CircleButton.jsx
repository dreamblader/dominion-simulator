import React from "react";

// Style
import classes from "./CircleButton.module.css";

const CircleButton = props => {
  const { text, onClick } = props;

  return (
    <button className={classes.container} onClick={onClick}>
      <p className={classes.text}>{text}</p>
    </button>
  );
}

export default CircleButton;