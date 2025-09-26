import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  const [topFilms, setTopFilms] = useState([]);
  const [topActors, setTopActors] = useState([]);

  useEffect(() => {
    fetch("/api/top-films")
      .then(res => res.json())
      .then(data => setTopFilms(data));

    fetch("/api/top-actors")
      .then(res => res.json())
      .then(data => setTopActors(data));
  }, []);

  return (
    <div>
      <h2>Top 5 Rented Films</h2>
      <ul>
        {topFilms.map(film => (
          <li key={film.film_id}>
            <Link to={`/films/${film.film_id}`}>{film.title}</Link> ({film.rental_count} rentals)
          </li>
        ))}
      </ul>

      <h2>Top 5 Actors</h2>
      <ul>
        {topActors.map(actor => (
          <li key={actor.actor_id}>
            <Link to={`/actors/${actor.actor_id}`}>
              {actor.first_name} {actor.last_name}
            </Link> ({actor.rental_count} rentals)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LandingPage;
