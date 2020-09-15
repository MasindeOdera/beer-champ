import React, {createContext, useReducer} from 'react';

const initialState = {
    beerList: [],
    colors: [],
    styles: [],
    filteredList: [],
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
        case 'SET_LIST':
            return {
              ...state,
              beerList: action.payload,
            };
        case 'SET_STYLES':
            return {
                ...state,
                styles: action.payload,
            };
        case 'SET_COLORS':
            return {
                ...state,
                colors: action.payload,
            }
        default:
            return initialState;
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };