import { useEffect, useState } from "react";
import "../styles/CountryDetails.scss";

import axios from "axios";

import { ArrowLeft } from "react-feather";

export default function CountryDetails({ country, setSelectedCountry }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const res = await axios.get(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    const data = res.data[0];

    setDetails(data);
    console.log(data);
  };

  return (
    <>
      <div className="back" onClick={() => setSelectedCountry("")}>
        <ArrowLeft size={16} className="back__arrow" />
        <p className="back__text">Back</p>
      </div>

      {details !== null ? (
        <div className="country-details">
          <div className="country__img-container">
            <img src={details.flag} className="country__flag" alt="" />
          </div>
          <div className="country__info-container">
            <h1 className="country__title">{details.name}</h1>
            <div className="country__info">
              <p className="country__subtitle">
                <span className="country__value">Native Name: </span>
                {details.nativeName}
              </p>
              <p className="country__subtitle">
                <span className="country__value">Population: </span>
                {details.population.toLocaleString()}
              </p>
              <p className="country__subtitle">
                <span className="country__value">Region: </span>
                {details.region}
              </p>
              <p className="country__subtitle">
                <span className="country__value">Sub Region: </span>
                {details.subregion}
              </p>
              <p className="country__subtitle">
                <span className="country__value">Capital: </span>
                {details.capital}
              </p>
              <p className="country__subtitle">
                <span className="country__value">Top Level Domain: </span>
                {details.topLevelDomain}
              </p>
              <p className="country__subtitle">
                <span className="country__value">Currencies: </span>
                {details.currencies
                  .map((currency) => currency.name)
                  .reduce((prev, curr) => [prev, ", ", curr])}
              </p>
              <p className="country__subtitle">
                <span className="country__value">Languages: </span>
                {details.languages
                  .map((language) => language.name)
                  .reduce((prev, curr) => [prev, ", ", curr])}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
}
