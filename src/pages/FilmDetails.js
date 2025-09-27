import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../App.css";

function FilmDetails() {
  const { filmId } = useParams();
  const [filmData, setFilmData] = useState(null);

  useEffect(() => {
    fetch(`/api/films/${filmId}`)
      .then(res => res.json())
      .then(data => setFilmData(data))
      .catch(err => console.error("Error fetching film:", err));
  }, [filmId]);

  const handleRent = () => {
    fetch("/api/rent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ customer_id: 1, inventory_id: filmId })
    })
      .then(res => res.json())
      .then(data => alert(data.message));
  };

  if (!filmData) return <p>Loading...</p>;

  const { film, actors } = filmData;

  return (
    <div>
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <p>Release Year: {film.release_year}</p>
      <p>Language: {film.language}</p>
      <p>Rating: {film.rating}</p>
      <p>Genres: {film.genres && film.genres.join(", ")}</p>

      {film.special_features && (
        <p><strong>Special Features:</strong> {film.special_features}</p>
      )}
      <h3>Actors</h3>
      <ul>
        {actors.map(actor => (
          <li key={actor.actor_id}>
            <Link to={`/actors/${actor.actor_id}`}>
              {actor.first_name} {actor.last_name}
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={handleRent}>Rent This Film</button>
    </div>
  );
}

export default FilmDetails;

