import React, { useState } from "react"; 
import MenuLayer from "../components/fragments/menu-layer";
import DeckColumn from "../components/fragments/deck-column";
import HandColumn from "../components/fragments/hand-column";
import Strings from "../../utils/strings";
import { getDeckService } from "../../service/api";
import getDeckActionsOnMenu, {getDeckForSearch, constructDeck} from "../../actions/deck";
import getOOGForSearch from "../../actions/out";
import getDZForSearch from "../../actions/destroy";
import getHandActionsOnMenu, { spawnFaceDown,spawnFaceUp } from "../../actions/hand";
import {reborn} from "../../actions/destroy";
import { getLifeMenu } from "../../actions/controls";
import "../styles/arena.css"
import ControlColumn from "../components/fragments/control-column";
import StatusColumn from "../components/fragments/status-column";

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

        <HandColumn
        ids={[myID, rivalID]}
        life={props.G.life}
        hand={props.G.hand}
        board={props.G.board}
        moves={props.moves}
        actions={[handMenu, selectToBoard, clearSelectionCallback]} 
        />
        
        <ControlColumn
        ids={[myID, rivalID]}
        currentPlayer={parseInt(props.ctx.currentPlayer)}
        moves={props.moves}
        events={props.events}
        reveal={props.G.reveal}
        />
        
        <StatusColumn/>
        
    </div> 
)};

export default Arena;