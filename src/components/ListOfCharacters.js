import React, {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { requestCharacters } from '../redux/actions';

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

export default function ListOfCharacters() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const characters = useSelector(state => state.characters);

  const [loader, setLoader] = useState(null);
  const page = useRef(1);
  const pageLoaderY = useRef(0);
  
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  };
  
  const handleObserver = ([entry]) => {
    const y = entry.boundingClientRect.y;
    
    if (pageLoaderY.current > y) {
      page.current++;
      dispatch(requestCharacters(page.current));
    }
    
    pageLoaderY.current = y;
  }
  
  const observer = useRef(new IntersectionObserver (
    handleObserver,
    options
  ));
    
  useEffect(() => {
    dispatch(requestCharacters(page.current));
  },[]);
  
  useEffect(() => {
    const currentLoader = loader;
    const currentObserver = observer.current;
    
    if(currentLoader) {
      currentObserver.observe(currentLoader); 
    }
    
    return () => {
      if (currentLoader) {
        currentObserver.unobserve(currentLoader);
      }
    };
  }, [loader]);

  if(!characters.length) {
    return <p>no posts</p>
  }

  return (
    <>
      <StyledList>
        {characters.map(character => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>{character.name} {character.id}</Link>
          </li>
        ))}
      </StyledList>

      {loading && <p style={{textAlign: "center"}}>Loading...</p>}

      <div ref={setLoader} style={{height: "100px"}} />
    </>
  );
}