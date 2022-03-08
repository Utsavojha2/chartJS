import React, { useContext, useEffect } from 'react';
import { WatchListContext } from '../context/watchList.context';
import useCoinsList from '../hooks/useCoinsList';
import CoinItem from './CoinItem';
import { COINS_LIST_KEY } from '../constants/crypto';
import { queryClient } from '../index';

const CoinList = () => {
  const { watchList } = useContext(WatchListContext);
  const { data, error, isLoading, refetch } = useCoinsList(
    watchList.currency,
    watchList.list,
    {
      enabled: watchList.list.length > 0
    }
  );

  useEffect(() => {
    if (!!watchList.list.length) {
      refetch();
      return;
    }
    queryClient.setQueryData(COINS_LIST_KEY, []);
  }, [watchList]);

  const renderCoins = () => {
    if (isLoading) return;
    if (error) {
      return <div>Error fetching Crypto coins!!</div>;
    }

    return (
      <ul className="coinlist list-group mt-2">
        {data?.map((coin) => {
          return <CoinItem key={coin.id} {...coin} />;
        })}
      </ul>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
