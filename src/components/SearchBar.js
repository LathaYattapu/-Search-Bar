import React, { useState } from 'react';
import countriesData from '../data/countries.json';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);
    if (value) {
      const filteredSuggestions = countriesData.filter(
        (country) =>
          country.country.toLowerCase().includes(value) ||
          country.capital.toLowerCase().includes(value)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search by country or capital..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      <div className="suggestions-list">
        {suggestions.map((item, index) => (
          <div key={index} className="suggestion-item">
            {item.country} - {item.capital}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
