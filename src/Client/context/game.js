import React, { createContext } from "react";

export const GameContext = createContext();

const GameProvider = ({ globals, children }) => {
  return (
    <GameContext.Provider value={globals}>{children}</GameContext.Provider>
  );
};

export default GameProvider;
