import React, { useEffect, useState } from "react";
// import data from "./data/data.json";
import SearchResult from "./SearchResult";
import Search from "./Search";

export default function Initialization() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const searchFromInput = (searchInput) => {
    const sanitisedSearch = searchInput.toLowerCase().trim();
    console.log("searchFromInput sanitisedSearch:", sanitisedSearch);
    if (Boolean(sanitisedSearch)) {
      console.log("there is a search input");
      const matched = countries.filter(({ name, capital }) => {
        return name.common.toLowerCase().includes(sanitisedSearch);
        // &&
        // capital.toLowerCase().includes(convertedVal)
      });
      setFilteredCountries(matched);
    } else {
      setFilteredCountries(countries);
    }
  };

  const fetchAPI = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      console.log("fetchAPI data:", data);
      data.sort((a, b) =>
        a.name.common.toUpperCase().localeCompare(b.name.common.toUpperCase())
      );
      console.log("sorted Data:", data);
      setCountries(data);
      setFilteredCountries(data);
    } catch (error) {
      console.log("fetchAPI ERROR:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <Search searchFromInput={searchFromInput} />
      <SearchResult data={filteredCountries} />
    </div>
  );
}
