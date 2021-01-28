import { useRef, useState } from "react";

import "../styles/App.scss";

import Header from "./Header";
import SearchBox from "./SearchBox";
import FilterDropdown from "./FilterDropdown";

function App() {
  const [region, setRegion] = useState("");

  const searchRef = useRef(null);

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
      </div>
    </div>
  );
}

export default App;
