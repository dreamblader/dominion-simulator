import React from "react";
import Button from "../components/general/button";

const MainMenu = ({ setMenu }) => {
  return (
    <div>
      <h1>Dimensional Dominions</h1>
      <h2>Card Game Simulator</h2>
      <Button
        click={() => {
          setMenu(1);
        }}
      >
        PLAY
      </Button>
      <Button
        click={() => {
          setMenu(2);
        }}
      >
        RULES
      </Button>
    </div>
  );
};

export default MainMenu;
