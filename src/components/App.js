import { useRef } from "react";

import "../styles/App.scss";

import Header from "./Header";
import SearchBox from "./SearchBox";

function App() {
  const searchRef = useRef(null);

  const onSearchChange = () => {
    const query = searchRef.current.value;

    console.log(query);
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <SearchBox searchRef={searchRef} onSearchChange={onSearchChange} />
      </div>
    </div>
  );
}

export default App;
