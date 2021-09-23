import React from "react";
import "../styles/card.css";

const Card = (props, ref) => (
    <div className="hoverable card-holder" 
    onClick={props.click}>
        {props.children}
    </div>
)

export default Card;