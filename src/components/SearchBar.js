import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchQuery = formData.get('searchQuery');
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="d-flex">
      <input
        type="text"
        name="searchQuery"
        placeholder="Search..."
        className="form-control me-2"
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchBar;