import React from "react";
import "../styles/arena.css"

const Arena = (props) =>(
    <div className="arena">
        <div className="deck-col">
            DECK HERE
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