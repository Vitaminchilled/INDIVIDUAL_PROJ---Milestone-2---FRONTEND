import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ActorDetails() {
  const { actorId } = useParams();
  const [actor, setActor] = useState(null);

  useEffect(() => {
    fetch(`/api/actors/${actorId}`)
      .then(res => res.json())
      .then(data => setActor(data));
  }, [actorId]);

  if (!actor) return <p>Loading...</p>;

  return (
    <div>
      <h2>{actor.actor.first_name} {actor.actor.last_name}</h2>
      <h3>Top 5 Films</h3>
      <ul>
        {actor.top_films.map(film => (
          <li key={film.film_id}>
            <Link to={`/films/${film.film_id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActorDetails;
