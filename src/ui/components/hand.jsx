import React from "react";
import Card from "./card";
import { Origin } from "../../models/enums";
import "../styles/hand.css";

const Hand = (props) => {
    let handMenu = (e, i) => {
        props.menuClick(e, i);
    }

    let isSelected = (index) => {
        if(props.selected){
            let thisSelection = props.selected.origin[Origin.HAND]
            if(thisSelection === index){
                return " selected";
            }
        }
        return "";
    }

    return(
    <div className="hand">
        {props.list.map((card, index) => (
        <Card key={index}
        extraClass={isSelected(index)} 
        click={(e) => handMenu(e, index)}>
            {card.id}
        </Card>
    ))}</div>
)}

export default Hand;