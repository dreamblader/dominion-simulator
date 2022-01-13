import React, { useState } from "react";
import { getDeckService } from "service/api";
import MenuLayer from "Client/ui/components/fragments/menu-layer";
import DeckColumn from "Client/ui/components/fragments/deck-column";
import HandColumn from "Client/ui/components/fragments/hand-column";
import ControlColumn from "Client/ui/components/fragments/control-column";
import StatusColumn from "Client/ui/components/fragments/status-column";
import DeckActions from "Client/actions/deck";
import ArenaActions from "Client/handlers/arena";
import Card from "Client/ui/components/card/card";
import "Client/ui/styles/arena.css";

const Arena = ({G, ctx, playerID, deckID, moves, events}) => {
  const myID = parseInt(playerID);
  const rivalID = myID === 0 ? 1 : 0;

  const [actionMenu, setActionMenu] = useState(null);
  const [highlightCard, setHighlightCard] = useState(Card("", -1));
  const [listMenu, setListMenu] = useState(null);
  const [statsMenu, setStatsMenu] = useState(null);
  const [lifeMenu, setLifeMenu] = useState(null);
  const [selectToBoard, setSelectToBoard] = useState(null);

  const setters = {setActionMenu, setHighlightCard, setListMenu, setStatsMenu, setLifeMenu, setSelectToBoard}
  const getters = {actionMenu, highlightCard, listMenu, statsMenu, lifeMenu, selectToBoard}

  const params = {G, myID, moves, ...setters, ...getters,}

  const actions = ArenaActions(params)
  const clientSideMoves = actions.moves;
  const {deckMenu, dzMenu, oogMenu, handMenu,
    boardMenu, clearMenuCallback} = actions.global;

  const isSelected = (place) =>
    selectToBoard && selectToBoard.origin[place] !== undefined;

  React.useEffect(() => {
    const deckStart = async () => {
      let cards = await getDeckService(deckID);
      moves.setDeck(DeckActions.constructDeck(deckID, cards, myID));
    };

    if (deckID !== G.deck[myID].id) {
      deckStart();
    }
  }, [moves, deckID, G, myID]);

  const clearSelectionCallback = () => {
    setSelectToBoard(null);
  };

  return (
    <div className="arena">
      <MenuLayer
        actionMenu={actionMenu}
        listMenu={listMenu}
        revealMenu={G.reveal[myID]}
        lifeMenu={lifeMenu}
        statsMenu={statsMenu}
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
