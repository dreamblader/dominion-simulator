import React from "react";
import clsx from "clsx";

// classes
import styles from "./Button.module.css";

// Styled = contained | outlined
/**
 * Button component
 * @param {text} text: string for text inside button
 * @param {onClick} onClick: function trigger when click
 * @param {classes} classes: custom classes
 * @param {type} type: type of button
 * @param {styled} styled: outilined or contained
 * @returns JSX.elemtn
 */
const Button = ({
  text = 'Button Component',
  onClick,
  classes = "",
  type = "button",
  styled = "contained",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={btnClasses(styled, classes)}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

// TODO - create a className function
const btnClasses = (styled, classes) => {
  return clsx(
    styles.button,
    classes && classes,
    styled === "outlined" && styles.outlined
  );
}