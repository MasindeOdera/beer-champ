import React, { createContext, useReducer } from "react";

const initialState = {
  selection: [],
  beer: "",
  color: "",
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "UPDATE_SELECTION":
        return {
          ...state,
          selection: action.payload,
        };
      case "CHOSEN_BEER":
        return {
          ...state,
          beer: action.payload,
        };
      case "CHOSEN_COLOR":
        return {
          ...state,
          color: action.payload,
        };
      default:
        return initialState;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
