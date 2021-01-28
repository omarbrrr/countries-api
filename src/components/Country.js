import React from "react";

export default function Country({ country, setSelectedCountry }) {
  const { flag, name, population, region, capital } = country;

  return (
    <div className="country" onClick={() => setSelectedCountry(name)}>
      <div className="country__flag-container">
        <img src={flag} className="country__flag" alt="" />
      </div>
      <div className="country__content">
        <h2 className="country__title">{name}</h2>

        <p className="country__subtitle">
          <span className="country__value">Population: </span>
          {population.toLocaleString()}
        </p>
        <p className="country__subtitle">
          <span className="country__value">Region: </span>
          {region}
        </p>
        <p className="country__subtitle">
          <span className="country__value">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
}
