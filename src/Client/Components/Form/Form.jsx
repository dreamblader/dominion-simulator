import React, { useState, useEffect } from "react";
import clsx from "clsx";

// Custom Components
import Button from "Client/Components/Button/Button"

// Classes
import classes from "./Form.module.css";

/**
 * PlayerForm
 * @param {formFields[fm], onSubmit(values), initialValues} props
 * @param onSubmit(value): Callback to pass values
 * @param fm.label: String (input label)
 * @param fm.name: string (name of the field)
 * @param fm.type: input type
 * @param fm.placeholder: string (opt, placeholder value)
 * @param fm.options: generic object associate with the input
 * @param fm.disabled: boolean (disable if true)
 * @param fm.hidden: boolean (hidde if true)
 * @returns 
 */
const PlayerForm = ({ initialValues, formFields, onSubmit }) => {
  const [values, setValues] = useState();
  useEffect(() => {
    if (formFields) {
      setValues(formFields.reduce((o, key) => ({ ...o, [key.name]: initialValues[key.name] || "" }), {}))
    }
  }, [initialValues, formFields])

  // Form subimitted
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(values);
  }

  // Input change
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Reset Button
  const onReset = () => {
    setValues(formFields.reduce((o, key) => ({ ...o, [key.name]: "" }), {}))
  }

  // Check if is loaded
  if (!values) {
    return <p>Not loaded yet.</p>
  }

  return (
    <div className={classes.container}>
      <h4 className={classes.title}>Get ready to play</h4>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        {formFields.map(item => (
          <div className={
            clsx(
              classes.control,
              item.disabled && classes.disabled,
              item.hidden && classes.hidden
            )
          }
            key={item.name}
          >
            <label className={classes.label}>{item.label}</label>
            <CustomInput
              type={item.type}
              name={item.name}
              value={values[item.name]}
              options={item.options ? item.options : []}
              disabled={item.disabled}
              onChange={onChange}
              placeholder={item.placeholder && item.placeholder}
            />
          </div>
        ))}

        <div className={classes.btnBox}>
          <Button type="submit" text="Submit" />
          <Button onClick={onReset} classes={clsx(classes.button, classes.rais)} text="Reset" styled="outlined" />
        </div>
      </form>
    </div>
  );
}

export default PlayerForm;

const CustomInput = props => {
  const { type, name, value, options, disabled, onChange, placeholder } = props;

  if (type === "text") {
    return <input
      className={classes.input}
      onChange={onChange}
      name={name}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
  }

  if (type === "select") {
    if (options.length <= 0) {
      return <p>The <code>select field [{name}]</code> doesnt have the <code>options</code> with the possible values for the <code>select</code> input</p>
    }
    return (
      <select className={classes.input} name={name} disabled={disabled} onChange={onChange} value={value}>
        <option value="">Select a deck</option>
        {options.map(option => (
          <option key={option.value} value={option.value.toString()}>{option.name}</option>
        ))}
      </select>
    );
  }
  return <p>There is no configuration in the form to the type of {type} for the input: {name}</p>
}
/*
  name: "",
  id: "",
  deck: ""
*/
