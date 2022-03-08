import React from 'react';
import { useQueries } from 'react-query';
import { useParams } from 'react-router-dom';
import HistoryChart from '../../features/HistoryChart';
import CoinData from '../../features/CoinData';
import useCoinDetail from '../../hooks/useCoinDetail';
import { COIN_DETAIL_KEY } from '../../constants/crypto';
import coinGecko from '../../api/coinGecko';

const timeFrames = ['1', '7', '30'];

const getCoinDetail = async (currency, coinId, timeFrame) => {
  const { data } = await coinGecko.get(`/coins/${coinId}/market_chart/`, {
    params: {
      vs_currency: currency,
      days: timeFrame
    }
  });
  return data;
};

const CoinDetail = () => {
  const { id, currency } = useParams();

  const userQueries = useQueries(
    timeFrames.map((frame) => {
      return {
        queryKey: [COIN_DETAIL_KEY, frame],
        queryFn: () => getCoinDetail(currency, id, frame)
      };
    })
  );

  console.log(userQueries);

  const renderCryptoDetail = () => {
    return userQueries.every((query) => !!query.isError) ? (
      <h3 className="text-center text-light">Error fetching coin detail</h3>
    ) : (
      <div className="coinlist">
        <HistoryChart />
        <CoinData />
      </div>
    );
  };

  return <div>{renderCryptoDetail()}</div>;
};

export default CoinDetail;
