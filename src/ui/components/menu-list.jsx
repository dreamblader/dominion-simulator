import React from "react";
import Card from "./card";
import "../styles/menu-list.css";
import Button from "./button";

const MenuList = (props) => {
    const clickRef = React.useRef(null);

    React.useEffect(() => {

        let clearMenu = (event) => {
            if (clickRef.current && !clickRef.current.contains(event.target)) {
                props.clear();
            }
        };
        
        document.body.addEventListener('mousedown', clearMenu );
    },[clickRef, props]);

    return(
        <div className="menu-list-container"  
        ref={clickRef}>
            <div className="header">
                HEADER HERE
                <Button extraClass=" quit"
                click={props.clear}
                >X</Button>
            </div>
            <div className="menu-list">
                {props.cards.map((card, index) => (
                <Card click={() => props.click(index)} key={index}>{card.id}</Card>
            ))}
            </div>
        </div>
)}

export default MenuList;