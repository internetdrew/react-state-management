import React from 'react';
import { PokemonProvider, usePokemon } from './store';

const PokemonList = () => {
  const { pokemon } = usePokemon();
  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3'>
      {pokemon.map(p => (
        <div key={p.id} className='text-center'>
          {p.name}
        </div>
      ))}
    </ul>
  );
};

function App() {
  return (
    <div>
      <PokemonProvider>
        <div className='mx-auto max-w-3xl'>
          <PokemonList />
        </div>
      </PokemonProvider>
    </div>
  );
}

export default App;
