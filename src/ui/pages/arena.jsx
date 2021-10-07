import React, { useState } from "react";
import Card from "../components/card"
import Jar from "../components/jar"  
import Hand from "../components/hand";
import Board from "../components/board";
import Button from "../components/button";
import MenuLayer from "../components/menu-layer";
import { Origin } from "../../models/enums";
import getDeckActionsOnMenu, {getDeckForSearch} from "../../actions/deck";
import getHandActionsOnMenu, { spawnFaceDown,spawnFaceUp } from "../../actions/hand";
import getDZForSearch, {reborn} from "../../actions/destroy";
import getOOGForSearch from "../../actions/out";
import { renderBoard } from "../../utils/help";
import ReactImage from "../images/react-img.png";
import "../styles/arena.css"



const Arena = (props) => {
    const myID = parseInt(props.playerID);
    const rivalID = myID === 0 ? 1 : 0;

    const [actionMenu, setActionMenu] = useState(null);
    const [listMenu, setListMenu] = useState(null);
    //const [lifeMenu, setLifeMenu] = useState(null);
    const [selectToBoard, setSelectToBoard] = useState(null);
    
    const isSelected = (place) => {
        if(selectToBoard && selectToBoard.origin[place] !== undefined){
            return " selected";
        }else{
            return "";
        }
    } 

    const deckMenu = (e) => {
        setSelectToBoard(null);
        setActionMenu(getDeckActionsOnMenu(e, props.moves.shuffleDeck));
    };

    const handMenu = (e, i) => {
        setSelectToBoard(null);
        setActionMenu(getHandActionsOnMenu(e, i, props.G.hand, myID));
    }

    const dzMenu = (id, mine) => {
        setListMenu(getDZForSearch(props.G, id, mine));
    }

    const oogMenu = () => {
        setListMenu(getOOGForSearch(props.G));
    }

    const setMenu = (menu) => {
        setActionMenu(menu)
    }
    
    const clearMenuCallback = () => {
        if(actionMenu){
            setActionMenu(null);
        } else if (listMenu) {
            setListMenu(null);
        } else if (props.G.reveal[myID]) {
            props.moves.clearReveal()
        }
    }

    const clearSelectionCallback = () => {
        setSelectToBoard(null);
    }

    const endMyTurn = () => {
        if(parseInt(props.ctx.currentPlayer) === myID){
            props.events.endTurn()
        }
    }

    const clientSideMoves = {
        spawnFaceUp: (...args) => {setSelectToBoard(spawnFaceUp(...args))},
        spawnFaceDown: (...args) => {setSelectToBoard(spawnFaceDown(...args))},
        reborn: (...args) => {setSelectToBoard(reborn(...args))},
        getDeckForSearch: (...args) => {setListMenu(getDeckForSearch(props.G, myID))},
        setMenu,
    };

    return (
    <div className="arena">
        <MenuLayer
        actionMenu={actionMenu}
        listMenu={listMenu}
        revealMenu={props.G.reveal[myID]}
        ids={[myID, rivalID]}
        moves={Object.assign(props.moves, clientSideMoves)}
        clear={clearMenuCallback}/>
        <div className="deck-col">
            <Card>{props.G.deck[rivalID].length}</Card>
            <Card 
            click={() => dzMenu(rivalID, false)}>
                {props.G.destroyZone[rivalID].length}
            </Card>
            <Jar click={() => oogMenu()}>OUT</Jar>
            <Card 
            extraClass={isSelected(Origin.DZ)} 
            click={() => dzMenu(myID, true)}>
                {props.G.destroyZone[myID].length}
            </Card>
            <Card 
            click={(e) => deckMenu(e)}>
                {props.G.deck[myID].length}
            </Card>
        </div>
        <div className="hand-col">
            <Hand 
            reveal={false}
            list={props.G.hand[rivalID]}/>
            <Board 
            board={renderBoard(props.G.board, myID)} 
            ids={[myID, rivalID]}
            life={props.G.life} 
            selected={selectToBoard}
            moves={props.moves}
            clear={clearSelectionCallback}/>
            <Hand 
            reveal={true}
            list={props.G.hand[myID]} 
            menuClick={handMenu}
            selected={selectToBoard}/>
        </div>
        <div className="control-col">
        <Button click={() => props.moves.callReact(ReactImage)}
        extraClass={props.G.reveal[rivalID] ? " hidden" : ""}>
                REACT!
            </Button>
            <Button click={() => endMyTurn()}
            extraClass={parseInt(props.ctx.currentPlayer) !== myID ? " hidden" : ""}>
                END TURN
            </Button>
        </div>
        <div className="status-col">
            CARD STATUS HERE
        </div>
    </div> 
)};

export default Arena;