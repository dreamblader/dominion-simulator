import React from "react";
import GameProvider from "Client/context/game";
import { getDeckService } from "service/api";
import DeckActions from "Client/actions/deck";
import Arena from "../arena/arena";
import Preparation from "../preparation/preparation";
import "./style.css";

const Board = ({ G, ctx, moves, events, playerID, deckID }) => {
  const myID = parseInt(playerID);
  const rivalID = myID === 0 ? 1 : 0;

  React.useEffect(() => {
    const deckStart = async () => {
      let cards = await getDeckService(deckID);
      moves.setDeck(DeckActions.constructDeck(deckID, cards, myID));
    };

    if (deckID !== G.deck[myID].id) {
      deckStart();
    }
  }, [moves, deckID, G, myID]);

  const renderPhase = () => {
    switch (ctx.phase) {
      case "preparation":
        return <Preparation />;
      case "game":
        return <Arena />;
      default:
        console.error(
          `No available case for this phase. Current phase is ${ctx.phase}`
        );
        return <div />;
    }
  };

  return (
    <GameProvider globals={{ G, ctx, moves, events, myID, rivalID }}>
      {renderPhase()}
    </GameProvider>
  );
};

export default Board;
