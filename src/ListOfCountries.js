import React from "react";
import data from "./data/data.json";

export default function ListOfCountries() {
  return (
    <div className="main-cards-container">
      {data.map((element, index) => (
        <div key={index} className="card-container">
          <div
            className="cards-image"
            style={{
              backgroundImage: `url(${element.flag})`,
            }}
          ></div>
          {/* <div className="image-container">
            holla
            <img
              src={element.flag}
              alt={element.name}
              className="cards-image"
            ></img>
          </div> */}
          <div className="card-info">
            <h2>{element.name}</h2>
            <h5>Population: {element.population}</h5>
            <h5>Region: {element.region}</h5>
            <h5>Capital: {element.capital}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
