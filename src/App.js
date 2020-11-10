import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route } from "wouter";


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Gifs de pandas</Link>
        <Link to="/gif/ecuador">Gifs de ecuador</Link>
        <Link to="/gif/colombia">Gifs de Colombia</Link>
        <Link to="/gif/pokemon">Gifs de pokemons</Link>
        <Route
          component={ListOfGifs} 
          path="/gif/:keyword"
          
        />
      </section>
    </div>
  );
}

export default App;
