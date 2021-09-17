import React from "react";
import "../styles/card.css";

const Card = (props) => (
    <div className="hoverable card-holder">{props.children}</div>
)

export default Card;