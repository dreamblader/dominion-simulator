import React from "react";
import PropTypes from 'prop-types';
import { doWhenClickOutside } from "../../../../utils/menu";
import "../../styles/menu.css";

const Menu = ({items, moves, clear, posX, posY}) => {
    const clickRef = React.useRef(null);
    const isMouseUpTheCenter = window.innerHeight / 2 > posY
    const style = isMouseUpTheCenter ? {
        left: posX,
        top: posY
    } : {
        left: posX,
        bottom: window.innerHeight-posY 
    }

    React.useEffect(() => doWhenClickOutside(clickRef, clear),[clickRef, clear]);
    
    let menuClick = (item) => {
        moves[item.event].apply(this, item.args);
        clear();
    };

    return(
        <div className="menu" 
        style={style} 
        ref={clickRef}>
            {items.map((item, index) => (
            <div className="menu-item" onClick={() => menuClick(item)} key={index}>{item.name}</div>
        ))}
        </div>
)}

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    moves: PropTypes.object,
    clear: PropTypes.func,
    posX: PropTypes.number,
    posY: PropTypes.number
}

export default Menu;