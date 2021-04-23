import React, { createContext, useReducer } from "react";
import { data } from "../utils/mockups/mockup";
import AppReducer from "./AppReducer";

const initialState = {
  Offers: data,
  Offer: [],
  select: (q: string): void => {},
  getAll: (): void => {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const selectOffer = (q: string) => {
    dispatch({
      type: "SELECT_OFFER",
      payload: q,
    });
  };

  const getAll = () => {
    dispatch({
      type: "GET_OFFERS",
      payload: null,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        Offers: state.Offers,
        Offer: state.Offer,
        select: selectOffer,
        getAll,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
