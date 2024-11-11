import React, { useState } from 'react';

function ProductSearch({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a product"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default ProductSearch;
