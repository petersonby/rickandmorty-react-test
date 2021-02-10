import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

export default function SingleCharacter({ match }) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${match.params.id}`
      );
  
      if (response.ok) {
        let json = await response.json();

        setCharacter(json);
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    };
 
    fetchData();
  }, [match.params.id]);

  return (
    <>
      <div><Link to="/">Back to List</Link></div>

      <img src={character.image} />
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      {/* <p>Location name: {character.location.name}</p> */}
      <p>created {character.created}</p>

      {/* <div>Episodes List:</div>
      <ul>
        {character.episode.map((episode, i) => (<li key={i}><a href={episode}>{episode}</a></li>))}
      </ul> */}
    </>
  );
}