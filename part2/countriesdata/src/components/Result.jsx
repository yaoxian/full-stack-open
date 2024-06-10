/* eslint-disable react/prop-types */
import { useState } from "react";

const CountryView = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>

      <h2>languages:</h2>
      <ul>
        {Object.values(country.languages).map((lang, i) => (
          <li key={i}>{lang}</li>
        ))}
      </ul>

      <img src={country.flags.png} />
    </div>
  );
};

const Result = ({ matches }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleShowButtonClick = (country) => {
    setSelectedCountry(country);
  };

  if (matches.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (matches.length === 1) {
    const country = matches[0];
    return <CountryView country={country} />;
  } else if (matches.length <= 10) {
    return (
      <>
        {matches.map((country) => (
          <div
            key={country.cca3}
            style={{ display: "flex", alignItems: "center" }}
          >
            <p style={{ margin: "0 10px 0 0" }}>{country.name.common}</p>
            <button onClick={() => handleShowButtonClick(country)}>show</button>
          </div>
        ))}
        {selectedCountry && <CountryView country={selectedCountry} />}
      </>
    );
  }
  return null;
};

export default Result;
