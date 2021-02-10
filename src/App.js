import React from 'react';
import { Route } from "react-router-dom";
import SingleCharacter from './components/SingleCharacter';
import ListOfCharacters from './components/ListOfCharacters';

function App() {

  return (
    <div className="App">
      <Route path="/" exact component={ListOfCharacters} />
      <Route path="/character/:id" component={SingleCharacter} />
    </div>
  );
}

export default App;
