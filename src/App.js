import axios from 'axios';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
// import countries from './countries.json'
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const results = await axios(`https://ih-countries-api.herokuapp.com/countries`);
      setCountries(results.data)
    }
    getCountries()
  },[])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
      
    </div>
  );
}

export default App;
