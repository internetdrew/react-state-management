import React from 'react';
import { useState, useEffect, useContext, createContext } from 'react';
import { PokemonProvider, usePokemon } from './store';

const PokemonList = () => {
  const { pokemon } = usePokemon();
  return (
    <div>
      {pokemon.map(p => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div>
      <PokemonProvider>
        <PokemonList />
      </PokemonProvider>
    </div>
  );
}

export default App;
