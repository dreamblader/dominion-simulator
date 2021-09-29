import React from "react";
import { orNothing } from "../../utils/help";
import "../styles/card.css";

const Card = (props, ref) => (
    <div className={"hoverable card-holder"+orNothing(props.extraClass)} 
    onClick={props.click}>
        {props.children}
    </div>
)

export default Card;