import React from "react";
import { GameContext } from "Client/context/game";
import "./menu-select-turn-style.css";

const MenuSelectTurn = () => {
  const { moves } = React.useContext(GameContext);

  //TODO
  return (
    <div>
      <h1>YOU WIN</h1>
    </div>
  );
};

export default MenuSelectTurn;
