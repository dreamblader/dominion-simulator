import React from "react";
import PropTypes from 'prop-types';
import Card from "../card/card";
import Button from "../general/button";
import Strings from "../../../../utils/strings";
import { doWhenClickOutside } from "../../../../utils/menu";
import "../../styles/menu-list.css";


const MenuList = ({menu, ids, click, highlight, clear}) => {
    const clickRef = React.useRef(null);

    const getExtraCardClass = (card) => {
        if(menu.header === Strings.oogHeader){
            return card.controller === ids[0] ? " user-border" : " rival-border";
        }
        return ""
    }

    React.useEffect(() => {doWhenClickOutside(clickRef, clear)}
    ,[clickRef, clear]);

    return(
        <div className="menu-list-container"  
        ref={clickRef}>
            <div className="header">
                {menu.header}
                <Button extraClass=" quit"
                click={clear}
                >X</Button>
            </div>
            <div className="menu-list">
                {menu.cards.map((card, index) => (
                <Card
                extraClass={getExtraCardClass(card)} 
                click={(e) => click(e, index)}
                card={card}
                highlight={highlight} 
                key={index}/>
            ))}
            </div>
        </div>
)}

MenuList.propTypes = {
    menu: PropTypes.object,
    ids: PropTypes.arrayOf(PropTypes.number),
    click: PropTypes.func,
    highlight: PropTypes.func,
    clear: PropTypes.func
}

export default MenuList;