import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { requestSingleCharacter } from '../redux/actions';

export default function SingleCharacter({ match }) {
  const dispatch = useDispatch();
  const character = useSelector(state => state.singleCharacter)[0];

  useEffect(() => {
    dispatch(requestSingleCharacter(match.params.id));
  },[]);

  if(!character) {
    return <p>Not Found</p>
  }

  return (
    <div>
      <div><Link to="/">Back to List</Link></div>

      <img src={character.image} />
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>created {character.created}</p>

      <div>Episodes List:</div>
      <ul>
        {character.episode.map((episode, i) => (<li key={i}><a href={episode}>{episode}</a></li>))}
      </ul>
    </div>
  );
}