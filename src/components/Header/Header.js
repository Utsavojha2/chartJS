import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">
        <a>
          <h1 className="text-center text-warning mt-3 mb-4">CoinStar</h1>
        </a>
      </Link>
    </div>
  );
};

export default Header;
