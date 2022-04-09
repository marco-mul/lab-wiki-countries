import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const { id } = useParams();
  const country = countries.find((item) => item.alpha3Code.includes(id));
  if (!country) {
    return (
      <>
        <div>Loading</div>
      </>
    );
  }
  return (
    <div>
      <h1>{country.name.common}</h1>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((closeCountry) => (
                  <li>
                    <Link to={`/${closeCountry}`}>
                      {closeCountry}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;