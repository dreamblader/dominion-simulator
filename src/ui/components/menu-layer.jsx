import React from "react";
import MenuData from "../../models/menu";
import Menu from "../components/menu";
import MenuList from "../components/menu-list"
import "../styles/menu-layer.css";

const MenuLayer = (props) => {

    const clickMenuList = (event, index) => {
        let actions = props.listMenu.actions.map(action => {
            let args = [index];
            if(Array.isArray(action.args)) {
                action.args.push(...args);
            } else {
                action.args = args;
            }
            
            return action
        });
        let menu = MenuData(event.pageX, event.pageY, actions);
        
        props.moves.setMenu(menu);
    }
    
    return(
        <div className="menu-layer"> 
        {props.actionMenu && 
        props.actionMenu.actions.length > 0 &&
            <Menu items={props.actionMenu.actions} 
            moves={props.moves} 
            posX={props.actionMenu.posX}
            posY={props.actionMenu.posY}
            clear={props.clear}/>}
        {props.listMenu &&  
        props.listMenu.cards.length > 0 &&
            <MenuList menu={props.listMenu}
            ids={props.ids}
            moves={props.moves}
            click={clickMenuList}
            clear={props.clear}/>}
        </div>
)};

export default MenuLayer;