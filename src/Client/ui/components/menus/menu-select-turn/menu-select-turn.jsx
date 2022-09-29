import React from "react";
import Button from "../../general/button";
import { GameContext } from "Client/context/game";
import "./menu-select-turn-style.css";

const MenuSelectTurn = () => {
  const { moves } = React.useContext(GameContext);

  const selectTurn = (isFirst) => {
    moves.winnerSelectTurn(isFirst);
  };

  return (
    <div className="select-turn-container">
      <h1>You want to go...</h1>
      <div className="select-turn">
        <Button click={() => selectTurn(true)}>
          <h1>FIRST!</h1>
        </Button>
        <Button click={() => selectTurn(false)}>
          <h1>SECOND!</h1>
        </Button>
      </div>
    </div>
  );
};

export default MenuSelectTurn;
