import React from "react";
import { orNothing } from "../../utils/help";
import "../styles/button.css";

const Button = (props) => (
    <button className={"hoverable button"+orNothing(props.extraClass)} 
    onClick={props.click}>
        {props.children}
    </button>
)

export default Button;