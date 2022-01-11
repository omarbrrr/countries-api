import React from 'react';

export default function Country({ country, setSelectedCountry }) {
  const { flag, flags, name, cca3, population, region, capital } = country;

  return (
    <div className="country" onClick={() => setSelectedCountry(cca3)}>
      <div className="country__flag-container">
        <img src={flags.svg} className="country__flag" alt={`${flag} Flag`} />
      </div>
      <div className="country__content">
        <h2 className="country__title">{name.official}</h2>

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
          {capital && capital[0]}
        </p>
      </div>
    </div>
  );
}
