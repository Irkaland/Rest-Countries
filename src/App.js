import './App.css';
import { Main } from './components/Main';
import { faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core';
import { Route, Routes } from 'react-router-dom';
import { CountryPage } from './pages/CountryPage';
import { useEffect } from 'react';
import { useState } from "react";
import { Header } from './components/Header';

library.add(faMoon, faSearch, faSun);

function App() {
  const [countries, setCountries] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((country) => setCountries(country));
  }, []);
  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Routes>
        <Route path='/' element={<Main countries={countries} setCountries={setCountries} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>;
        <Route path='/:name' element={<CountryPage key={country.name} setCountry={setCountry} countries={countries} setCountries={setCountries} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        }></Route>;
      </Routes>
    </div >
  );
}

export default App;
