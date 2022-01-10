import React from "react";
import PropTypes from 'prop-types';
import { orNothing } from "../../../utils/help";
import "../styles/button.css";

const Button = ({click, extraClass, hidden, children}) => {
    const isHidden = () => {
        return hidden ? " hidden": "";
    }

    return(
    <button className={"hoverable button"
    +orNothing(extraClass)
    +isHidden()} 
    onClick={click}>
        {children}
    </button>
)}

Button.propTypes = {
    click: PropTypes.func, 
    extraClass: PropTypes.string, 
    hidden: PropTypes.bool, 
    children: PropTypes.node
}

export default Button;