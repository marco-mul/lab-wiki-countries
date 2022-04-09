import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom';

const allCountries = [...countries];

const CountriesList = () => {
  return (
    <div>
        <div>
            <h2>CountriesList</h2>
        </div>
        <div>  
            {allCountries.map(country =>(
              <Link key={country.alpha3Code} className="country-link" to={country.alpha3Code}>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt="flag"
          />
          {country.name.common}
        </Link>
            ))};
        </div>
    </div>
    
  )
}

export default CountriesList