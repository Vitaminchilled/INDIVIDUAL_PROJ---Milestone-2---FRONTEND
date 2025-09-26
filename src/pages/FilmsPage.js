import React, { useState } from "react";
import { Link } from "react-router-dom";

function FilmsPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    fetch(`/api/search?q=${query}`)
      .then(res => res.json())
      .then(data => setResults(data));
  };

  return (
    <div>
      <h2>Search Films</h2>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search by title, actor, or genre"
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map(film => (
          <li key={film.film_id}>
            <Link to={`/films/${film.film_id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmsPage;
