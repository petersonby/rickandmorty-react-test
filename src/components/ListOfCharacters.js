import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ListOfCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://rickandmortyapi.com/api/character/'
      );
  
      if (response.ok) {
        let json = await response.json();

        setCharacters(json.results);
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    };
 
    fetchData();
  }, []);

  const StyledList = styled.ul`
    list-style: none;
    width: 200px;
    margin: 0 auto;

    li + li {
      margin-top: 30px;
    }

    a {
      font-size: 18px;
      text-align: center;
      text-decoration: none;
      color: #000;

      border: 10px;
      background-color: #eee;
      padding: 20px 10px;
      display: block;
    }
  `;

  return (
    <StyledList>
      {characters.map(character => (
        <li key={character.id}>
          <Link to={`/character/${character.id}`}>{character.name}</Link>
        </li>
      ))}
    </StyledList>
  );
}