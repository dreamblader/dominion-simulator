import React from "react";
import "../styles/menu.css";

const Menu = (props) => {
    const clickRef = React.useRef(null);

    React.useEffect(() => {

        let clearMenu = (event) => {
            if (clickRef.current && !clickRef.current.contains(event.target)) {
                props.moves.clearMenu();
            }
        };
        
        document.body.addEventListener('mousedown', clearMenu );
    },[clickRef, props.moves]);  

    return(
    <div className="menu" ref={clickRef}>{props.items.map((item, index) => (
        <div className="menu-item" onClick={() => props.moves[item.event]()} key={index}>{item.name}</div>
    ))}</div>
)}

export default Menu;