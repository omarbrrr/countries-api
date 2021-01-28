import { useEffect, useRef, useState } from "react";

import axios from "axios";

import SearchBox from "./SearchBox";
import FilterDropdown from "./FilterDropdown";
import Countries from "./Countries";

export default function Home({ setSelectedCountry }) {
  const [countries, setCountries] = useState([]);
  const [queryCountries, setQueryCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const [region, setRegion] = useState("");

  const searchRef = useRef(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    const newCountries = queryCountries.filter((country) =>
      country.region.includes(region)
    );
    setFilteredCountries(newCountries);
  }, [queryCountries, region]);

  const fetchCountries = async () => {
    const res = await axios.get("https://restcountries.eu/rest/v2/all");
    const newCountries = res.data;

    setCountries(newCountries);
    setQueryCountries(newCountries);
    setFilteredCountries(newCountries);
  };

  const onSearchChange = () => {
    const query = searchRef.current.value;

    if (query === "") {
      setQueryCountries(countries);
    } else {
      const lowerQuery = query.toLowerCase();

      const newCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(lowerQuery)
      );
      setQueryCountries(newCountries);
    }
  };

  const onFilterChange = (region) => {
    if (region === null) {
      setRegion("");
    } else {
      setRegion(region.label);
    }
  };

  return (
    <>
      <div className="filters">
        <SearchBox searchRef={searchRef} onSearchChange={onSearchChange} />
        <FilterDropdown onFilterChange={onFilterChange} />
      </div>
      <Countries
        countries={filteredCountries}
        setSelectedCountry={setSelectedCountry}
      />
    </>
  );
}
