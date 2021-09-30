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
                props.clear();
            }
        };
        
        document.body.addEventListener('mousedown', clearMenu );
    },[clickRef, props]);
    
    let menuClick = (item) => {
        props.moves[item.event].apply(this, item.args);
        props.clear();
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