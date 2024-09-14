import React from 'react';

const SearchResults = ({ country }) => {
  return country ? (
    <div className="country-details">
      <h2>{country.country}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Official Language: {Array.isArray(country.official_language) ? country.official_language.join(', ') : country.official_language}</p>
      <p>Currency: {country.currency}</p>
    </div>
  ) : (
    <p>No country selected</p>
  );
};

export default SearchResults;
