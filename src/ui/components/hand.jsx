import React from "react";
import Card from "./card";
import "../styles/hand.css";

const Hand = (props) => (
    <div className="hand">{props.list.map((card) => (
        <Card key={card.id}>{card.id}</Card>
    ))}</div>
)

export default Hand;