import React, { createContext, useReducer } from "react";

const initialState = {
  selection: [],
  filteredList: [],
  beer: "",
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
      default:
        return initialState;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
