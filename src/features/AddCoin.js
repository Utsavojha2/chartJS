import React, { useState, useContext } from 'react';
import Dropdown from 'react-dropdown';
import { AVAILABLE_COINS } from '../constants/crypto';
import { WatchListContext } from '../context/watchList.context';

const AddCoin = () => {
  const { watchList, appendWatchList } = useContext(WatchListContext);
  const [selectedOption, _setSelectedOption] = useState(null);

  const onOptionClick = (item) => appendWatchList(item, true);

  const cryptoOptions = AVAILABLE_COINS.filter(
    (coin) => !watchList.list.includes(coin)
  );

  console.log(AVAILABLE_COINS);

  return (
    <div className="add-coin-dropdown">
      <Dropdown
        options={cryptoOptions}
        onChange={onOptionClick}
        value={selectedOption}
        placeholder="Add Coin"
      />
    </div>
  );
};

export default AddCoin;
