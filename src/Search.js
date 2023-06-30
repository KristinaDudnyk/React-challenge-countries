import React, { useState } from "react";

export default function Search({ searchFromInput }) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput({ target }) {
    setSearchInput(target.value.toLowerCase().trim());
    console.log(searchInput);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchFromInput(searchInput);
    console.log("Search for:", searchInput);
  };

  return (
    <div>
      <div>
        <label htmlFor="search-bar">Search countries</label>
        <input
          type="text"
          id="search-bar"
          placeholder="Search for a country..."
          name="search-bar-main"
          onChange={handleSearchInput}
          onInput={handleSearchSubmit}
          value={searchInput}
        ></input>
      </div>
    </div>
  );
}
