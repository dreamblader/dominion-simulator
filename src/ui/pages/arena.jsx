import React from "react";
import Card from "../components/card.jsx"    
import "../styles/arena.css"

const Arena = (props) =>(
    <div className="arena">
        <div className="deck-col">
            <Card>{props.G.deck[1].length}</Card>
            <Card>{props.G.destroyZone[1].length}</Card>
            {/* OUT ZONE HERE */}
            <Card>{props.G.destroyZone[0].length}</Card>
            <Card>{props.G.deck[0].length}</Card>
        </div>
        <div className="hand-col">
            HAND + BOARD HERE
        </div>
        <div className="control-col">
            CONTROLLERS HERE
        </div>
        <div className="status-col">
            CARD STATUS HERE
        </div>
    </div> 
);

export default Arena;