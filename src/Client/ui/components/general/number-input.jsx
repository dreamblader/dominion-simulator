import React from "react";
import PropTypes from 'prop-types';
import Button from "./button";
import { numberOrZero } from "../../../../utils/help";
import "../../styles/number-input.css";

const NumberInput = ({value, setValue}) => (
    <div className="input-container">
        <Button 
            extraClass=" success"
            click={()=> setValue(value+1)}>+</Button>
        <input 
        type="number" 
        value={value} 
        onChange={e => setValue(numberOrZero(parseInt(e.target.value)))}/>
        <Button 
            extraClass=" quit"
            click={()=> setValue(value-1)}>-</Button>
    </div>
)

NumberInput.propTypes = {
    value: PropTypes.number,
    setValue: PropTypes.func
}

export default NumberInput;