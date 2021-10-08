import React from "react";
import { orNothing } from "../../utils/help";
import "../styles/jar.css";

const Jar = (props) => (
    <div 
    className={"hoverable jar "+orNothing(props.extraClass)} 
    onClick={props.click}>
        {props.children}
        </div>
)

export default Jar;