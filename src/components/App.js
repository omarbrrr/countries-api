import { useEffect, useRef, useState } from "react";

import axios from "axios";

import "../styles/App.scss";

import Header from "./Header";
import SearchBox from "./SearchBox";
import FilterDropdown from "./FilterDropdown";
import Countries from "./Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");

  const searchRef = useRef(null);

  useEffect(() => {
    fetchCountries();
    console.log("fetched");
  }, []);

  const fetchCountries = async () => {
    const res = await axios.get("https://restcountries.eu/rest/v2/all");
    const newCountries = res.data;

    setCountries(newCountries);
  };

  const onSearchChange = () => {
    const query = searchRef.current.value;

    console.log(query);
  };

  const onFilterChange = (region) => {
    if (region === null) {
      setRegion("");
    } else {
      setRegion(region.label);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <SearchBox searchRef={searchRef} onSearchChange={onSearchChange} />
        <FilterDropdown onFilterChange={onFilterChange} />
        <Countries countries={countries} />
      </div>
    </div>
  );
}

export default App;
