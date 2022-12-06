import React from "react";
import PropTypes from "prop-types";
import "./form-style.css";

const Form = ({ submitText, submitAction, children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    submitAction(e);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
      <button type="submit">{submitText}</button>
    </form>
  );
};

Form.propTypes = {
  submitText: PropTypes.string,
  submitAction: PropTypes.func,
  children: PropTypes.node,
};

export default Form;
