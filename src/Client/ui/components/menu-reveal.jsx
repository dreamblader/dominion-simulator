import React from "react";
import PropTypes from 'prop-types';
import Button from "./button"
import Card from "./card";
import "../styles/menu-reveal.css";


const MenuReveal = ({menu, highlight, clear}) => {

    const getContent = () => {
        let content = menu.content;
        if(content.hasOwnProperty("id")){
            return (<Card highlight={highlight} card={content}/>)
        } else if(content.hasOwnProperty("ref")){
            return (<img src={content.ref} alt={content.title}/>)
        }
    };

    return(
        <div className="menu-reveal-layer">
            <div className="menu-reveal">
                <div className="reveal-text">
                    {menu.topText}
                </div>
                <div className="reveal-content">
                    {getContent()}
                </div>
                <div className="reveal-text">
                    {menu.bottomText}
                </div>
                <Button click={clear}>OK</Button>
            </div>
        </div>
)}

MenuReveal.propTypes = {
    menu: PropTypes.object,
    highlight: PropTypes.func,
    clear: PropTypes.func
}

export default MenuReveal;