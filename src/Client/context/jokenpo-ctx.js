import { GameResult } from "models/enums";
import React, { createContext } from "react";

export const JokenpoContext = createContext();

export const jokenpoActions = {
  PLAY: "play",
  SET_RESULT: "set-result",
};

const jokenpoReducer = (state, action) => {
  switch (action.type) {
    case jokenpoActions.PLAY:
      return { result: null };
    case jokenpoActions.SET_RESULT:
      return { result: action.payload };
    default:
      return new Error();
  }
};

const getDefaultValue = (result = null) => {
  console.log(result);
  return { result: result };
};

const JokenpoProvider = ({ result, children }) => {
  const [jokenpoState, jokenpoDispatch] = React.useReducer(
    jokenpoReducer,
    getDefaultValue(result)
  );

  return (
    <JokenpoContext.Provider value={{ jokenpoState, jokenpoDispatch }}>
      {children}
    </JokenpoContext.Provider>
  );
};

export default JokenpoProvider;
