import React from "react";
import PropTypes from 'prop-types';
import Card from "./card";
import { Origin } from "../../../models/enums";
import "../styles/hand.css";

const Hand = ({list, selected, menuClick, highlight}) => {
    const handMenu = (e, i) => {
        if(menuClick){
            menuClick(e, i);
        }
    }

    const isSelected = (index) => {
        if(selected){
            let thisSelection = selected.origin[Origin.HAND]
            if(thisSelection === index){
                return " selected";
            }
        }
        return "";
    }

    return(
    <div className="hand">
        {list.map((card, index) => (
        <Card key={index}
        card={card}
        highlight={highlight}
        extraClass={isSelected(index)} 
        click={(e) => handMenu(e, index)}/>
    ))}</div>
)}

Hand.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object), 
    selected: PropTypes.object, 
    menuClick: PropTypes.func, 
    highlight: PropTypes.func
}

export default Hand;