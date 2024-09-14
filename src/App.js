import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import './styles/App.css';

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div className="App">
      <h1>Country Finder</h1>
      <SearchBar setSelectedCountry={setSelectedCountry} />
      {selectedCountry && <SearchResults country={selectedCountry} />}
    </div>
  );
}

export default App;

