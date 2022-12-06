import React from "react";
import PropTypes from "prop-types";
import { isValueInEnum } from "utils/help";

export const FormTypes = {
  TEXT: "text",
  EMAIL: "email",
  PASSWORD: "password",
};

const FormInput = ({ title, type, ref }) => {
  const blankSpaces = /\s/gm;

  if (isValueInEnum(FormTypes, type)) {
    return (
      <React.Fragment>
        <h3>{`${title} :`}</h3>
        <input
          type={type}
          name={title.replace(blankSpaces, "_").toLowerCase()}
          ref={ref}
        />
      </React.Fragment>
    );
  } else {
    return;
  }
};

FormInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  ref: PropTypes.any,
};

export default FormInput;
