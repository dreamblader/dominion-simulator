import React from "react";
import "../styles/menu.css";

const Menu = (props) => (
    <div className="menu">{props.items.map((item) => (
        <div className="menu-item" onClick={() => item.event}>{item.name}</div>
    ))}</div>
)

export default Menu;