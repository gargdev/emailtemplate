import React from 'react';
import "../styles/searchbar.css"
function SearchBar() {
    return (
        <input type="text" className="form-control mb-4 srch-bar" placeholder="Search email templates" />
    );
}

export default SearchBar;