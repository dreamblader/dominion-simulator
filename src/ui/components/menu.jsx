import React from "react";
import "../styles/menu.css";

const Menu = (props) => {
    const clickRef = React.useRef(null);
    const style = {
        left: props.posX,
        top: props.posY
    }

    React.useEffect(() => {

        let clearMenu = (event) => {
            if (clickRef.current && !clickRef.current.contains(event.target)) {
                props.moves.clearMenu();
            }
        };
        
        document.body.addEventListener('mousedown', clearMenu );
    },[clickRef, props.moves]);
    
    let menuClick = (item) => {
        props.moves[item.event](item.args);
        props.moves.clearMenu();
    }

    return(
        <div className="menu" 
        style={style} 
        ref={clickRef}>
            {props.items.map((item, index) => (
            <div className="menu-item" onClick={() => menuClick(item)} key={index}>{item.name}</div>
        ))}
        </div>
)}

export default Menu;