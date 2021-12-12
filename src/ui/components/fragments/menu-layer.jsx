import React from "react";
import MenuData from "../../../models/menu";
import Menu from "../menu";
import MenuList from "../menu-list"
import MenuLife from "../menu-life";
import MenuReveal from "../menu-reveal";
import "../../styles/menu-layer.css";

const MenuLayer = (props) => {

    const clickMenuList = (event, index) => {
        console.log(props.highlight);
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
            highlight={props.highlight}
            moves={props.moves}
            click={clickMenuList}
            clear={props.clear}/>}
        {props.lifeMenu &&
            <MenuLife
            life={props.lifeMenu.life}
            clear={props.clear}
            apply={(lp) => props.moves.setLife(lp)}/>}
        {props.revealMenu.length > 0 && 
            <MenuReveal
            highlight={props.highlight} 
            menu={props.revealMenu[0]}
            clear={props.clear}/>}
        </div>
)};

export default MenuLayer;