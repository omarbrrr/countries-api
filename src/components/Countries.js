import React from "react";
import "../styles/Countries.scss";

import Country from "./Country";

export default function Countries({ countries, setSelectedCountry }) {
  return (
    <div className="countries-container">
      {countries.length > 0 ? (
        countries.map((country) => (
          <Country
            key={country.alpha3Code}
            country={country}
            setSelectedCountry={setSelectedCountry}
          />
        ))
      ) : (
        <p className="countries-text">
          There're no countries with the specified filters.
        </p>
      )}
    </div>
  );
}
