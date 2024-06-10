import { useEffect, useState } from "react";
import countries from "./services/countries";
import Result from "./components/Result";

function App() {
  const [query, setQuery] = useState("");
  const [countriesList, setCountries] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    countries.getAll().then((response) => {
      setCountries(response);
    });
  }, []);

  const handleQueryChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    const filteredMatches = countriesList.filter((country) =>
      country.name.common.toLowerCase().includes(newQuery.toLowerCase())
    );
    setMatches(filteredMatches);
  };

  return (
    <div>
      <form>
        find countries
        <input value={query} onChange={handleQueryChange}></input>
      </form>
      <Result matches={matches} />
    </div>
  );
}

export default App;
