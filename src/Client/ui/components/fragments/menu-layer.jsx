import React from "react";
import PropTypes from 'prop-types';
import MenuData from "../../../../models/menu/menu";
import Menu from "../menus/menu";
import MenuList from "../menus/menu-list"
import MenuLife from "../menus/menu-life";
import MenuReveal from "../menus/menu-reveal";
import "../../styles/menu-layer.css";
import MenuStats from "../menus/menu-stats";

const MenuLayer = ({listMenu, actionMenu, revealMenu, statsMenu, lifeMenu, ids, moves, highlight, clear}) => {

    const clickMenuList = (event, index, card) => {
        let actions = listMenu.actions.map(action => {
            let args = listMenu.isShuffled ? [card] : [index];
            if(Array.isArray(action.args)) {
                action.args.push(...args);
            } else {
                action.args = args;
            }
            
            return action
        });
        let menu = MenuData(event.pageX, event.pageY, actions);
        
        moves.actionsMenu(menu);
    }
    
    return(
        <div className="menu-layer"> 
        {actionMenu && 
        actionMenu.actions.length > 0 &&
            <Menu items={actionMenu.actions}  
            moves={moves} 
            posX={actionMenu.posX}
            posY={actionMenu.posY}
            clear={clear}/>}
        {listMenu &&  
        listMenu.cards.length > 0 &&
            <MenuList menu={listMenu}
            ids={ids}
            highlight={highlight}
            moves={moves}
            click={clickMenuList}
            clear={clear}/>}
        {statsMenu &&
            <MenuStats
            data={statsMenu}
            highlight={highlight}
            apply={moves.applyStats} 
            clear={clear}/>
        }
        {lifeMenu &&
            <MenuLife
            life={lifeMenu.life}
            clear={clear}
            apply={(lp) => moves.setLife(lp)}/>}
        {revealMenu.length > 0 && 
            <MenuReveal
            highlight={highlight} 
            menu={revealMenu[0]}
            clear={clear}/>}
        </div>
)};

MenuLayer.propTypes = {
    listMenu: PropTypes.object, 
    actionMenu: PropTypes.object, 
    revealMenu: PropTypes.arrayOf(PropTypes.object), 
    lifeMenu: PropTypes.object, 
    ids: PropTypes.arrayOf(PropTypes.number), 
    moves: PropTypes.object, 
    highlight: PropTypes.func, 
    clear: PropTypes.func
}

export default MenuLayer;