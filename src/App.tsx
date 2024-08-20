import './App.css';
import { useState, useEffect } from 'react';

interface Pokemon {
  name: string;
  url: string;
}

export default function App() {
  const BASE_URL = 'https://pokeapi.co/api/v2';
  const [pokemonList, setPokemonList] = useState<Pokemon[]>();

  useEffect(() => {
    const fetchPokemon = async () => {
      await fetch(`${BASE_URL}/pokemon`)
        .then((response) => response.json())
        .then((response) => setPokemonList(response.results));
    };

    fetchPokemon();
  }, []);

  return (
    <main>
      <section className="search-bar">
        <div className="wrapper">
          <input type="text" name="" id="" placeholder="pokemon" />
          <button>
            <img src="" alt="pesquisa" />
          </button>
        </div>
      </section>
      <section className="pokemon-list">
        <div className="wrapper">
          {pokemonList
            ? pokemonList?.map((pokemon, index) => {
                return (
                  <div key={index} className="card">
                    <div className="sprite-wrapper">
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                        alt={pokemon.name}
                      />
                      <span>{pokemon.name}</span>
                    </div>
                  </div>
                );
              })
            : 'Carregando...'}
        </div>
      </section>
    </main>
  );
}
