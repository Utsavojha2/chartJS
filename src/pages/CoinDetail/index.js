import React from 'react';
import { useQueries } from 'react-query';
import { useParams } from 'react-router-dom';
import HistoryChart from '../../features/HistoryChart';
import CoinData from '../../features/CoinData';
import { COIN_DETAIL_KEY } from '../../constants/crypto';
import useCoinsList from '../../hooks/useCoinsList';
import {
  timeFrames,
  getCoinDetail,
  transformCoinDetailData
} from '../../helpers/config';

const CoinDetail = () => {
  const { id, currency } = useParams();

  const coinDetailTimeframesData = useQueries(
    timeFrames.map((frame) => {
      return {
        queryKey: [COIN_DETAIL_KEY, frame],
        queryFn: () => getCoinDetail(currency, id, frame)
      };
    })
  );

  const { data: currentCoinDetail } = useCoinsList(currency, [id]);
  const coinDetailTimeframes = transformCoinDetailData(
    coinDetailTimeframesData.map((data) => data.data)
  );

  const renderCryptoDetail = () => {
    return coinDetailTimeframesData.every((query) => !!query.isError) ? (
      <h3 className="text-center text-light">Error fetching coin detail</h3>
    ) : (
      <div className="coinlist">
        <HistoryChart
          {...coinDetailTimeframes}
          detail={currentCoinDetail?.[0]}
        />
        <CoinData data={currentCoinDetail?.[0]} />
      </div>
    );
  };

  return <div>{renderCryptoDetail()}</div>;
};

export default CoinDetail;
