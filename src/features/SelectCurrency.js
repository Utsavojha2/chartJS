import React, { useState, useContext } from 'react';
import Dropdown from 'react-dropdown';
import { AVAILABLE_COINS } from '../constants/crypto';
import { WatchListContext } from '../context/watchList.context';

const AddCoin = () => {
  const { watchList, appendWatchList } = useContext(WatchListContext);
  const [selectedCurrencyOption, _setSelectedOption] = useState(null);

  const onOptionClick = (item) => appendWatchList(item);

  return (
    <div className="select-currency-dropdown">
      <Dropdown
        options={['USD', 'EUR', 'MXN']}
        onChange={onOptionClick}
        value={selectedCurrencyOption}
        placeholder="Select Currency"
      />
    </div>
  );
};

export default AddCoin;
