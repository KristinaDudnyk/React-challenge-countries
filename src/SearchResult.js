import React from "react";

export default function SearchResult({ data }) {
  // console.log("SearchResult function component ran");
  // console.log("SearchResult prop data:", data);
  return (
    <div className="main-cards-container">
      {data.map((element, index) => (
        <div key={index} className="card-container">
          <div
            className="cards-image"
            style={{
              backgroundImage: `url(${element.flags.svg})`,
            }}
          ></div>
          <div className="card-info">
            <h2>{element.name.common}</h2>
            <h5>Population: {element.population}</h5>
            <h5>Region: {element.region}</h5>
            <h5>Capital: {element.capital}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
