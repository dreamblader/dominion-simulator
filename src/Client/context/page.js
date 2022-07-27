import React, { createContext } from "react";

export const PageContext = createContext();

export const pageActions = {
  RESET: "reset",
  GO_TO_MENU: "goToMenu",
  GO_TO_GAME: "goToGame",
  GO_TO_RULES: "goToRules",
};

const defaultValue = { pageId: 0 };

const pageReducer = (state, action) => {
  console.log("HERE -> " + action.type);
  switch (action.type) {
    case pageActions.RESET:
      return defaultValue;
    case pageActions.GO_TO_MENU:
      return { pageId: 0 };
    case pageActions.GO_TO_GAME:
      console.log("yo");
      return { pageId: 1 };
    case pageActions.GO_TO_RULES:
      return { pageId: 2 };
    default:
      return new Error();
  }
};

const PageProvider = ({ children }) => {
  const [pageState, pageDispatch] = React.useReducer(pageReducer, defaultValue);

  return (
    <PageContext.Provider value={{ pageState, pageDispatch }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
