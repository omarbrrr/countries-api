import { useEffect, useState } from 'react';
import '../styles/CountryDetails.scss';

import axios from 'axios';

import { ArrowLeft } from 'react-feather';

export default function CountryDetails({ code, setSelectedCountry }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const res = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    const data = res.data[0];

    console.log(res.data[0]);
    setDetails(data);
  };

  return (
    <>
      <div className="back" onClick={() => setSelectedCountry('')}>
        <ArrowLeft size={16} className="back__arrow" />
        <p className="back__text">Back</p>
      </div>

      {details !== null && (
        <div className="country-details">
          <div className="country__img-container">
            <img src={details.flags.svg} className="country__flag" alt="" />
          </div>
          <div className="country__info-container">
            <h1 className="country__title">{details.name.official}</h1>
            <div className="country__info">
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
                {details.capital[0]}
              </p>
              <p className="country__subtitle">
                <span className="country__value">Currencies: </span>
                {Object.values(details.currencies)
                  .map(({ name, symbol }) => `${name} (${symbol})`)
                  .join(', ')}
              </p>
              <p className="country__subtitle">
                <span className="country__value">Languages: </span>
                {Object.values(details.languages).join(', ')}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
