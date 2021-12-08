import React from "react";
import Card from "./card";
import { Origin } from "../../models/enums";
import "../styles/hand.css";

const Hand = (props) => {
    const handMenu = (e, i) => {
        if(props.menuClick){
            props.menuClick(e, i);
        }
    }

    const isSelected = (index) => {
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
        card={card}
        highlight={props.highlight}
        extraClass={isSelected(index)} 
        click={(e) => handMenu(e, index)}/>
    ))}</div>
)}

export default Hand;