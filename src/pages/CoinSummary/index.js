import React from 'react';
import AddCoin from '../../features/AddCoin';
import CoinList from '../../features/CoinList';
import SelectCurrency from '../../features/SelectCurrency';

const CoinSummary = () => {
  return (
    <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
      <AddCoin />
      <SelectCurrency />
      <CoinList />
    </div>
  );
};

export default CoinSummary;
