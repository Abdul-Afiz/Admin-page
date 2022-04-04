import React, { createContext, useReducer } from "react";
import DarkModeReducer from "./darkmode-reducer";

export type ContextType = {
  state: {
    darkMode: boolean;
  };
  dispatch: React.Dispatch<{ type: string }>;
};

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext<ContextType>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

export const DarkModeContextProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
