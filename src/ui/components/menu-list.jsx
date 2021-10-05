import React from "react";
import Card from "./card";
import Button from "./button";
import { closeMenuWhenClickOutside } from "../../utils/menu";
import "../styles/menu-list.css";


const MenuList = (props) => {
    const clickRef = React.useRef(null);

    React.useEffect(() => closeMenuWhenClickOutside(clickRef, props.clear)
    ,[clickRef, props]);

    return(
        <div className="menu-list-container"  
        ref={clickRef}>
            <div className="header">
                {props.menu.header}
                <Button extraClass=" quit"
                click={props.clear}
                >X</Button>
            </div>
            <div className="menu-list">
                {props.menu.cards.map((card, index) => (
                <Card click={(e) => props.click(e, index)} key={index}>{card.id}</Card>
            ))}
            </div>
        </div>
)}

export default MenuList;