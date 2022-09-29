import React, { createContext } from "react";
import redirect from "utils/redirect";

export const PageContext = createContext();

export const pageActions = {
  RESET: "reset",
  GO_TO_MENU: "goToMenu",
  GO_TO_GAME: "goToGame",
  GO_TO_RULES: "goToRules",
};

const home = new URL(window.location);

const pageReducer = (state, action) => {
  clearURL();

  switch (action.type) {
    case pageActions.RESET:
    case pageActions.GO_TO_MENU:
      return { pageId: 0 };
    case pageActions.GO_TO_GAME:
      return { pageId: 1 };
    case pageActions.GO_TO_RULES:
      return { pageId: 2 };
    default:
      return new Error();
  }
};

const getDefaultValue = (id) => {
  return { pageId: id };
};

const clearURL = () => {
  window.history.pushState({}, "", home.origin);
};

const PageProvider = ({ children }) => {
  const redirectId = redirect(home.pathname);
  const [pageState, pageDispatch] = React.useReducer(
    pageReducer,
    getDefaultValue(redirectId)
  );

  clearURL();

  return (
    <PageContext.Provider value={{ pageState, pageDispatch }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
