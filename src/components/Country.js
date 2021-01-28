import React from "react";

export default function Country({ country }) {
  const { flag, name, population, region, capital } = country;

  return (
    <div className="country">
      <div className="country__flag-container">
        <img src={flag} className="country__flag" alt="" />
      </div>
      <div className="country__content">
        <h2 className="country__title">{name}</h2>
        <p className="country__subtitle">
          Population:{" "}
          <span className="country__value">{population.toLocaleString()}</span>
        </p>
        <p className="country__subtitle">
          Region: <span className="country__value">{region}</span>
        </p>
        <p className="country__subtitle">
          Capital: <span className="country__value">{capital}</span>
        </p>
      </div>
    </div>
  );
}
