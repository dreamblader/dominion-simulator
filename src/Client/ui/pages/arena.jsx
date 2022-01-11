import React, { useState } from "react";
import { getDeckService } from "service/api";
import MenuLayer from "Client/ui/components/fragments/menu-layer";
import DeckColumn from "Client/ui/components/fragments/deck-column";
import HandColumn from "Client/ui/components/fragments/hand-column";
import ControlColumn from "Client/ui/components/fragments/control-column";
import StatusColumn from "Client/ui/components/fragments/status-column";
import DeckActions from "Client/actions/deck";
import DestroyActions from "Client/actions/destroy";
import OutActions from "Client/actions/out"
import HandActions from "Client/actions/hand";
import MenuActions from "Client/actions/menu";
import BoardActions from "Client/actions/board";
import Card from "Client/ui/components/card/card";
import Strings from "utils/strings";
import "Client/ui/styles/arena.css";

const Arena = ({G, ctx, playerID, deckID, moves, events}) => {
  const myID = parseInt(playerID);
  const rivalID = myID === 0 ? 1 : 0;

  const {getBoardActionMenu, getTileCardsList, moveInBoard} = BoardActions
  const {getDZForSearch, reborn} = DestroyActions
  const {spawnFaceUp, spawnFaceDown, getHandActionsOnMenu} = HandActions
  const {getOOGForSearch} = OutActions
  const {constructDeck, getDeckActionsOnMenu, getDeckForSearch} = DeckActions
  const [actionMenu, setActionMenu] = useState(null);
  const [highlightCard, setHighlightCard] = useState(Card("", -1));
  const [listMenu, setListMenu] = useState(null);
  const [lifeMenu, setLifeMenu] = useState(null);
  const [selectToBoard, setSelectToBoard] = useState(null);

  const isSelected = (place) =>
    selectToBoard && selectToBoard.origin[place] !== undefined;

  React.useEffect(() => {
    const deckStart = async () => {
      let cards = await getDeckService(deckID);
      moves.setDeck(constructDeck(deckID, cards, myID));
    };

    if (deckID !== G.deck[myID].id) {
      deckStart();
    }
  }, [constructDeck, moves, deckID, G, myID]);

  //TODO REMOVE THIS AFTER
  const deckMenu = (e) => {
    setSelectToBoard(null);
    setActionMenu(getDeckActionsOnMenu(e));
  };

  const dzMenu = (id, mine) => {
    setListMenu(getDZForSearch(G, id, mine));
  };

  const oogMenu = () => {
    setListMenu(getOOGForSearch(G.out));
  };

  const handMenu = (e, i) => {
    setSelectToBoard(null);
    setActionMenu(getHandActionsOnMenu(e, i, G.hand, myID));
  };

  const boardMenu = (e, tile, id) => {
    setActionMenu(getBoardActionMenu(e, tile, id));
  };

  const setMenu = (menu) => {
    setActionMenu(menu);
  };

  const clearListMenu = () => {
    let wasDeckMenu = listMenu.header === Strings.deckHeader;
    setListMenu(null);
    if (wasDeckMenu) {
      setTimeout(moves.shuffleDeck, 100);
    }
  };

  const clearMenuCallback = () => {
    if (actionMenu) {
      setActionMenu(null);
    } else if (listMenu) {
      clearListMenu();
    } else if (lifeMenu) {
      setLifeMenu(null);
    } else if (G.reveal[myID]) {
      moves.clearReveal();
    }
  };
 //TODO @END
  const clearSelectionCallback = () => {
    setSelectToBoard(null);
  };

  const clientSideMoves = {
    spawnFaceUp: (...args) => {
      setSelectToBoard(spawnFaceUp(...args));
    },
    spawnFaceDown: (...args) => {
      setSelectToBoard(spawnFaceDown(...args));
    },
    reborn: (...args) => {
      setSelectToBoard(reborn(...args));
    },
    getDeckForSearch: () => {
      setListMenu(getDeckForSearch(G.deck[myID].cards));
    },
    myLifeMenu: () => {
      setLifeMenu(MenuActions.getLifeMenu(G.life[myID]));
    },
    setMenu,
    getTileCardsList: (...args) => {
      setListMenu(getTileCardsList(...args))
    },
    moveInBoard: (...args) => {
      setSelectToBoard(moveInBoard(G.board, ...args));
    },
  };

  return (
    <div className="arena">
      <MenuLayer
        actionMenu={actionMenu}
        listMenu={listMenu}
        revealMenu={G.reveal[myID]}
        lifeMenu={lifeMenu}
        ids={[myID, rivalID]}
        moves={Object.assign(moves, clientSideMoves)}
        highlight={setHighlightCard}
        clear={clearMenuCallback}
      />

      <DeckColumn
        ids={[myID, rivalID]}
        decks={G.deck}
        dzs={G.destroyZone}
        out={G.out}
        selection={isSelected}
        highlight={setHighlightCard}
        menu={[deckMenu, dzMenu, oogMenu]}
      />

      <HandColumn
        ids={[myID, rivalID]}
        life={G.life}
        hand={G.hand}
        board={G.board}
        moves={moves}
        actions={[
          handMenu,
          boardMenu,
          selectToBoard,
          clearSelectionCallback,
          setHighlightCard,
        ]}
      />

      <ControlColumn
        ids={[myID, rivalID]}
        currentPlayer={parseInt(ctx.currentPlayer)}
        moves={moves}
        events={events}
        reveal={G.reveal}
      />

      <StatusColumn card={highlightCard} />
    </div>
  );
};

export default Arena;
