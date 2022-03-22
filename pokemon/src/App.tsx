import React from 'react';
import AllPokemons from './components/AllPokemons';
import ShowPokemon from './components/ShowPokemon'
import Header from './components/Header';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';

function App() : JSX.Element {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/:page' element={<AllPokemons/>}/>
          <Route path='/pokemon/:id' element={<ShowPokemon/>}/>
          <Route path='*' element={<AllPokemons/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
