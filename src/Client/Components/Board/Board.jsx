import React from "react";

// Custom Components
import CardComponent from "Client/Components/CardComponent/CardComponent";
import CircleButton from "Client/Components/CircleButton/CircleButton";

import classes from "./Board.module.css"

const Board = () => {
  return (
    <div className={classes.arena}>
      <h1 className={classes.title}>Arena</h1>
      <div className={classes.container}>
        <div className={classes.col}>
          <CardComponent>
            Conter of cards
          </CardComponent>
          <CardComponent />
          <CircleButton text="Out" />
          <CardComponent />
          <CardComponent />
        </div>
        <div className={classes.board}>

        </div>
        <div className={classes.col}>

        </div>
      </div>
    </div>
  );
}

export default Board;