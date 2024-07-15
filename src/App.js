import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [listaPokemon, setListaPokemon] = useState([]);

  const buscarPokemon = async () => {
    try {
      const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
      setListaPokemon(respuesta.data.results);
    } catch (error) {
      console.error('Error al buscar los Pokémon:', error);
    }
  };

  return (
    <div className="App">
      <button onClick={buscarPokemon}>Buscar Pokémon</button>
      <ul>
        {listaPokemon.map((pokemon, indice) => (
          <li key={indice}>{`• ${pokemon.name}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
