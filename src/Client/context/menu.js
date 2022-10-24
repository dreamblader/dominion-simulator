import React, { createContext } from "react";

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  //TODO add all menu useStates here.
  return (
    <MenuContext.Provider value={"placeholder"}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
