import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="field">
      <div className="control">
        <input
          type="text"
          placeholder="Search for food..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="input"
          aria-label="Search for food"
        />
      </div>
    </div>
  );
};

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
