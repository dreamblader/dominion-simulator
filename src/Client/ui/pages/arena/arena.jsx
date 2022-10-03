import React, { useState, useContext } from "react";
import { GameContext } from "Client/context/game";
import MenuLayer from "Client/ui/components/fragments/menu-layer";
import DeckColumn from "Client/ui/components/fragments/deck-column";
import HandColumn from "Client/ui/components/fragments/hand-column";
import ControlColumn from "Client/ui/components/fragments/control-column";
import StatusColumn from "Client/ui/components/fragments/status-column";
import Starter from "Client/ui/components/starter/starter";
import ArenaActions from "Client/handlers/arena";
import Card from "Client/ui/components/card/card";
import "./style.css";

const Arena = () => {
  //TODO remove this after re-implementig this context on their layers
  const { G, ctx, moves, events, myID, rivalID } = useContext(GameContext);

  //TODO wrap all this useStates in a MenuContext
  const [actionMenu, setActionMenu] = useState(null);
  const [highlightCard, setHighlightCard] = useState(Card("", -1));
  const [listMenu, setListMenu] = useState(null);
  const [statsMenu, setStatsMenu] = useState(null);
  const [lifeMenu, setLifeMenu] = useState(null);
  const [selectToBoard, setSelectToBoard] = useState(null);

  const turnMessage = `It's your ${
    parseInt(ctx.currentPlayer) === myID ? "own" : "rival's"
  } turn`;

  console.log(ctx);

  const setters = {
    setActionMenu,
    setHighlightCard,
    setListMenu,
    setStatsMenu,
    setLifeMenu,
    setSelectToBoard,
  };
  const getters = {
    actionMenu,
    highlightCard,
    listMenu,
    statsMenu,
    lifeMenu,
    selectToBoard,
  };

  const params = { G, moves, myID, ...setters, ...getters };

  const actions = ArenaActions(params);
  const clientSideMoves = actions.moves;
  const { deckMenu, dzMenu, oogMenu, handMenu, boardMenu, clearMenuCallback } =
    actions.global;

  const isSelected = (place) =>
    selectToBoard && selectToBoard.origin[place] !== undefined;

  const clearSelectionCallback = () => {
    setSelectToBoard(null);
  };

  return (
    <div className="arena">
      <Starter message={turnMessage} />
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
        selection={isSelected}
        highlight={setHighlightCard}
        menu={[deckMenu, dzMenu, oogMenu]}
      />

      <HandColumn
        actions={[
          handMenu,
          boardMenu,
          selectToBoard,
          clearSelectionCallback,
          setHighlightCard,
        ]}
      />

      <ControlColumn />

      <StatusColumn card={highlightCard} />
    </div>
  );
};

export default Arena;
