import React, {createContext, useReducer} from 'react';

const initialState = {
    beerList: [],
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
        case 'GET_LIST':
          return {
              ...state,
              beerList: action.payload,
            };
        default:
            return initialState;
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };