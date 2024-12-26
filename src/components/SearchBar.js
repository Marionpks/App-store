import React from 'react';

const SearchBar = ({ searchQuery, onSearch }) => (
  <div className="search-input-container">
    <input
      type="search"
      placeholder="Search"
      className="search-input"
      value={searchQuery}
      onChange={(e) => onSearch(e.target.value)}
    />
    <img
      src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
      alt="search icon"
      className="search-icon"
    />
  </div>
);

export default SearchBar;
