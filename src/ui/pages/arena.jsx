import React from "react";
import Card from "../components/card"
import Jar from "../components/jar"  
import Hand from "../components/hand";
import Menu from "../components/menu";
import Board from "../components/board";
import "../styles/arena.css"


const Arena = (props) => {
    const myID = parseInt(props.playerID);
    const rivalID = myID === 0 ? 1 : 0;
    
    let deckMenu = (e) => {
        console.log(myID);
        console.log(rivalID);
        props.moves.getDeckActionsOnMenu(e);
    };   

    return (
    <div className="arena">
        {props.G.menu && 
        <Menu items={props.G.menu.actions} 
        moves={props.moves} 
        posX={props.G.menu.posX}
        posY={props.G.menu.posY}/>}
        <div className="deck-col">
            <Card>{props.G.deck[rivalID].length}</Card>
            <Card>{props.G.destroyZone[rivalID].length}</Card>
            <Jar>OUT</Jar>
            <Card>{props.G.destroyZone[myID].length}</Card>
            <Card click={(e) => deckMenu(e)}>{props.G.deck[myID].length}</Card>
        </div>
        <div className="hand-col">
            <Hand list={props.G.hand[rivalID]}/>
            <Board 
            board={props.G.board} 
            life={props.G.life} 
            selected={props.G.selectToBoard}
            moves={props.moves}/>
            <Hand 
            list={props.G.hand[myID]} 
            moves={props.moves}
            selected={props.G.selectToBoard}/>
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