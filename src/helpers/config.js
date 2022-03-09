import coinGecko from '../api/coinGecko';

export const timeFrames = ['1', '7', '365'];

export const getCoinDetail = async (currency, coinId, timeFrame) => {
  const { data } = await coinGecko.get(`/coins/${coinId}/market_chart/`, {
    params: {
      vs_currency: currency,
      days: timeFrame
    }
  });
  return data;
};

export const timeFramesNames = ['day', 'week', 'year'];

export const transformCoinDetailData = (data) => {
  return timeFramesNames
    .map((timeFrameName, index) => {
      for (let i = 0; i < data.length; i++) {
        if (index === i) {
          const cryptoData = data[i]?.prices.map((price) => {
            return {
              t: price[0],
              y: price[1].toFixed(2)
            };
          });
          return {
            [timeFrameName]: cryptoData
          };
        }
        continue;
      }
    })
    .reduce((prev, curr) => Object.assign(prev, curr), {});
};

export const options = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5
  },

  animation: {
    duration: 2000
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxes: [
      {
        type: 'time',
        distribution: 'linear'
      }
    ]
  }
};
