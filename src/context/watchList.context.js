import React, { createContext, useState } from 'react';
import { POPULAR_CRYPTO_LIST, CURRENCIES } from '../constants/crypto';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const WatchListContext = createContext();

export const WatchListContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useLocalStorage('watchList', {
    list: POPULAR_CRYPTO_LIST,
    currency: CURRENCIES['usd']
  });

  const appendWatchList = ({ value }, isListChanged = false) => {
    setWatchList((prevState) => {
      return !isListChanged
        ? {
            ...prevState,
            currency: value.toLowerCase()
          }
        : {
            ...prevState,
            list: [...prevState.list, value]
          };
    });
  };

  const deleteCoinListItem = (item) => {
    setWatchList((prevState) => {
      return {
        ...prevState,
        list: prevState.list.filter((coinItem) => coinItem !== item)
      };
    });
  };

  return (
    <WatchListContext.Provider
      value={{ watchList, deleteCoinListItem, appendWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
