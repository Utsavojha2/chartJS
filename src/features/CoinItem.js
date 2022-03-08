import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { WatchListContext } from '../context/watchList.context';

const CoinItem = ({
  id,
  image,
  current_price,
  name,
  price_change_percentage_24h: price_change
}) => {
  const navigate = useNavigate();
  const {
    deleteCoinListItem,
    watchList: { currency }
  } = useContext(WatchListContext);

  const onCoinItemClick = (e) => {
    if (e.target.classList.contains('delete-icon')) {
      deleteCoinListItem(id);
      return;
    }
    navigate(`/coin/${id}/${currency || 'usd'}`);
  };

  return (
    <div className="text-decoration-none my-1 coin" onClick={onCoinItemClick}>
      <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
        <img className="coinlist-image" src={image} alt={name} />
        <span className="text-decoration-none">
          {current_price} {'  '} {currency.toUpperCase()}
        </span>
        <span
          className={[
            price_change < 0 ? 'text-danger mr-2' : 'text-success mr-2',
            'minusTop'
          ].join(' ')}
        >
          {price_change < 0 ? (
            <i className="fas fa-sort-down align-middle mr-1"></i>
          ) : (
            <i className="fas fa-sort-up align-middle mr-1"></i>
          )}
          {price_change}
        </span>
        <i className="delete-icon fas fa-times-circle text-danger"></i>
      </li>
    </div>
  );
};

export default CoinItem;
