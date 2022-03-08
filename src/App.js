import React from 'react';
import { useIsFetching } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import CoinDetail from './pages/CoinDetail';
import CoinSummary from './pages/CoinSummary';
import 'react-dropdown/style.css';

function App() {
  const isFetching = useIsFetching();
  return (
    <div className="container container-app">
      <BrowserRouter>
        {isFetching ? <LoadingSpinner /> : null}
        <Header />
        <Routes>
          <Route path="/" element={<CoinSummary />} />
          <Route path="/coin/:id/:currency" element={<CoinDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
