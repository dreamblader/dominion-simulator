import React from "react";
import { orNothing } from "../../utils/help";
import "../styles/card.css";

const Card = (props) => {
    //TODO put renderCard inside here and pas card as info
    return(
    <div className={`hoverable card-holder `+orNothing(props.extraClass)} 
    onClick={props.click}
    onMouseEnter={props.card}>
        {props.children}
    </div>
)}

export default Card;