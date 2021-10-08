import React from "react";
import { orNothing } from "../../utils/help";
import "../styles/button.css";

const Button = (props) => {
    const isHidden = () => {
        return props.hidden ? " hidden": "";
    }

    return(
    <button className={"hoverable button"
    +orNothing(props.extraClass)
    +isHidden()} 
    onClick={props.click}>
        {props.children}
    </button>
)}

export default Button;