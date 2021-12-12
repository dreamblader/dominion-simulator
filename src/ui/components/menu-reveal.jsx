import React from "react";
import Button from "../components/button"
import Card from "./card";
import { renderCard } from "../../utils/card";
import "../styles/menu-reveal.css";


const MenuReveal = (props) => {

    const getContent = () => {
        let content = props.menu.content;
        if(content.hasOwnProperty("id")){
            return (<Card highlight={props.highlight}>
                {renderCard(content)}
                </Card>)
        } else if(content.hasOwnProperty("ref")){
            return (<img src={content.ref} alt={content.title}/>)
        }
    };

    return(
        <div className="menu-reveal-layer">
            <div className="menu-reveal">
                <div className="reveal-text">
                    {props.menu.topText}
                </div>
                <div className="reveal-content">
                    {getContent()}
                </div>
                <div className="reveal-text">
                    {props.menu.bottomText}
                </div>
                <Button click={props.clear}>OK</Button>
            </div>
        </div>
)}

export default MenuReveal;