import React from "react";
import Card from "./card";
import "../styles/hand.css";

const Hand = (props) => {
    let handMenu = (e, i) => {
        props.moves.getHandActionsOnMenu(e, i);
    }

    return(
    <div className="hand">
        {props.list.map((card, index) => (
        <Card key={index} 
        click={(e) => handMenu(e, index)}>
            {card.id}
        </Card>
    ))}</div>
)}

export default Hand;