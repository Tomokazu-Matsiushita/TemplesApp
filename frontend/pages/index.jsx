// page.js

import React, { useState } from 'react';
import TempleSearch from '/Users/tomokazumatsushita/Temple_Shrine_App/TempleApp/frontend/components/TempleSearch.jsx';
import axios from 'axios';

const Page = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [title, setTitle] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/search?title=${title}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = response.data;
      setSearchResults(data);
    } catch (error) {
      console.error('Error during search:', error.message);
    }
  };

  return (
    <div>
      <h1>そうだ！神社に行こう！</h1>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <div className="search-results">
        <ul>
          {searchResults.map((result) => (
            <li key={result.Href}>
              <p>Title: {result.Title}</p>
              <p>Latitude: {result.Latitude}</p>
              <p>Longitude: {result.Longitude}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
