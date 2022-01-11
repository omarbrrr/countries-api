import { useEffect, useState } from 'react';

import '../styles/App.scss';

import Header from './Header';
import Home from './Home';
import CountryDetails from './CountryDetails';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCountry]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="main">
        {selectedCountry === '' ? (
          <Home setSelectedCountry={setSelectedCountry} />
        ) : (
          <CountryDetails
            code={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        )}
      </div>
    </div>
  );
}

export default App;
