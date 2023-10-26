import React, { useState } from 'react';
import "../styles/searchbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="srch-bar">
      <input
        type="text"
        className="form-control mb-4 srch-bar-input"
        placeholder="Search email templates"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
    </div>
  );
}

export default SearchBar;
