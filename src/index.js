import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import { WatchListContextProvider } from './context/watchList.context';
import './index.css';

export const queryClient = new QueryClient();

ReactDOM.render(
  <WatchListContextProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </WatchListContextProvider>,
  document.getElementById('root')
);
