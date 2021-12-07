import React, { useState } from "react"; 
import Hand from "../components/hand";
import Board from "../components/board";
import Button from "../components/button";
import MenuLayer from "../components/fragments/menu-layer";
import DeckColumn from "../components/fragments/deck-column";
import Strings from "../../utils/strings";
import { getDeckService } from "../../service/api";
import getDeckActionsOnMenu, {getDeckForSearch, constructDeck} from "../../actions/deck";
import getOOGForSearch from "../../actions/out";
import getDZForSearch from "../../actions/destroy";
import getHandActionsOnMenu, { spawnFaceDown,spawnFaceUp } from "../../actions/hand";
import {reborn} from "../../actions/destroy";
import { getLifeMenu } from "../../actions/controls";
import { renderBoard } from "../../utils/help";
import ReactImage from "../images/react-img.png";
import "../styles/arena.css"



const Arena = (props) => {
    const myID = parseInt(props.playerID);
    const rivalID = myID === 0 ? 1 : 0;

    const [actionMenu, setActionMenu] = useState(null);
    const [listMenu, setListMenu] = useState(null);
    const [lifeMenu, setLifeMenu] = useState(null);
    const [selectToBoard, setSelectToBoard] = useState(null);

    const isSelected = (place) => selectToBoard && selectToBoard.origin[place] !== undefined

    React.useEffect(() => {

        const deckStart = async() => {
            let cards = await getDeckService(props.deckID)
            props.moves.setDeck(constructDeck(props.deckID, cards, myID));
        }

        if(props.deckID !== props.G.deck[myID].id){
            deckStart()
        }
    }
    ,[props, myID]);

    const deckMenu = (e) => {
        setSelectToBoard(null);
        setActionMenu(getDeckActionsOnMenu(e));
    };

    const dzMenu = (id, mine) => {
        setListMenu(getDZForSearch(props.G, id, mine));
    }

    const oogMenu = () => {
        setListMenu(getOOGForSearch(props.G.out));
    }

    const handMenu = (e, i) => {
        setSelectToBoard(null);
        setActionMenu(getHandActionsOnMenu(e, i, props.G.hand, myID));
    }

    const setMenu = (menu) => {
        setActionMenu(menu)
    }

    const clearListMenu = () => {
        let wasDeckMenu = listMenu.header === Strings.deckHeader;
        setListMenu(null);
        if(wasDeckMenu){
            setTimeout(props.moves.shuffleDeck, 100);
        }
    }
    
    const clearMenuCallback = () => {
        if(actionMenu){
            setActionMenu(null);
        } else if (listMenu) {
            clearListMenu()
        } else if (lifeMenu) {
            setLifeMenu(null);
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
        getDeckForSearch: () => {setListMenu(getDeckForSearch(props.G.deck[myID].cards))},
        myLifeMenu: () => {setLifeMenu(getLifeMenu(props.G.life[myID]))},
        setMenu,
    };

    return (
    <div className="arena">
        <MenuLayer
        actionMenu={actionMenu}
        listMenu={listMenu}
        revealMenu={props.G.reveal[myID]}
        lifeMenu={lifeMenu}
        ids={[myID, rivalID]}
        moves={Object.assign(props.moves, clientSideMoves)}
        clear={clearMenuCallback}/>

        <DeckColumn
        ids={[myID, rivalID]}
        decks={props.G.deck}
        dzs={props.G.destroyZone}
        out={props.G.out}
        selection={isSelected}
        menu={[deckMenu, dzMenu, oogMenu]}
        />

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
            hidden={props.G.reveal[rivalID].length > 0}>
                    REACT!
            </Button>
            <Button click={() => endMyTurn()}
            hidden={parseInt(props.ctx.currentPlayer) !== myID}>
                END TURN
            </Button>
        </div>
        <div className="status-col">
            CARD STATUS HERE
        </div>
    </div> 
)};

export default Arena;