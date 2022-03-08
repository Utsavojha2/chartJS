import { useQuery } from 'react-query';
import coinGecko from '../api/coinGecko';
import { COINS_LIST_KEY } from '../constants/crypto';

const getCoins = async (currency, ids) => {
  const { data } = await coinGecko.get('/coins/markets', {
    params: {
      vs_currency: currency,
      ids: ids.join(',')
    }
  });
  return data;
};

export default function useCoinsList(currency = 'usd', ids, configs = {}) {
  return useQuery(COINS_LIST_KEY, () => getCoins(currency, ids), {
    ...configs
  });
}
