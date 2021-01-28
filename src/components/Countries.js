import React from "react";
import "../styles/Countries.scss";

import Loader from "./Loader";
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
        <Loader />
      )}
    </div>
  );
}
