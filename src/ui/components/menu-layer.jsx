import React from "react";
import Menu from "../components/menu";
import MenuList from "../components/menu-list"
import "../styles/menu-layer.css";

const MenuLayer = (props) => (
        <div className="menu-layer"> 
        {props.actionMenu && 
            <Menu items={props.actionMenu.actions} 
            moves={props.moves} 
            posX={props.actionMenu.posX}
            posY={props.actionMenu.posY}
            clear={props.clear}/>}
        {props.listMenu && 
            <MenuList cards={props.listMenu}
            clear={props.clear}/>}
        </div>
);

export default MenuLayer;