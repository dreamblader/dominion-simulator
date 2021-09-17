import React from "react";
import Card from "../components/card"
import Jar from "../components/jar"  
import Hand from "../components/hand";
import Menu from "../components/menu";
import { getDeckActionsOnMenu } from "../../actions/deck";  
import "../styles/arena.css"


const Arena = (props) => {
    let deckMenu = () => {
        props.moves.getDeckActionsOnMenu()
    }; 
    return (
    <div className="arena">
        {props.G.menu && <Menu items={props.G.menu.actions}/>}
        <div className="deck-col">
            <Card onClick={() => console.log("yo")}>{props.G.deck[1].length} +1</Card>
            <Card>{props.G.destroyZone[1].length}</Card>
            <Jar>OUT</Jar>
            <Card>{props.G.destroyZone[0].length}</Card>
            <Card>{props.G.deck[0].length}</Card>
        </div>
        <div className="hand-col">
            <Hand list={props.G.hand[1]}/>
            <Hand list={props.G.hand[0]}/>
        </div>
        <div className="control-col">
            CONTROLLERS HERE
        </div>
        <div className="status-col">
            CARD STATUS HERE
        </div>
    </div> 
)};

export default Arena;