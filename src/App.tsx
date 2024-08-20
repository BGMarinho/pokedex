import './App.css';
import searchIcon from './assets/search.svg';
import leftArrow from './assets/left-arrow.svg';
import rightArrow from './assets/right-arrow.svg';
import { useState, useEffect } from 'react';

interface Pokemon {
  name: string;
  url: string;
}

export default function App() {
  const BASE_URL = 'https://pokeapi.co/api/v2/';
  const [pokemonList, setPokemonList] = useState<Pokemon[]>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPokemon = async () => {
      // await fetch(`${BASE_URL}/pokemon?limit=${page * 20}`)
      await fetch(`${BASE_URL}/pokemon?limit=20`)
        .then((response) => response.json())
        .then((response) => setPokemonList(response.results));
    };
    fetchPokemon();
  }, [page]);

  return (
    <main>
      <section className="search-bar">
        <div className="wrapper">
          <input type="text" name="" id="" placeholder="pokemon" />
          <button>
            <img src={searchIcon} alt="pesquisa" width={16} height={16} />
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
                        // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${offset}.png`}
                        alt={pokemon.name}
                      />
                      <span>{pokemon.name}</span>
                    </div>
                  </div>
                );
              })
            : 'Carregando...'}
          <div className="pagination">
            <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
              <img src={leftArrow} alt="voltar" width={16} height={16} />
            </button>
            <p>{page}</p>
            <button onClick={() => setPage(page + 1)}>
              <img src={rightArrow} alt="avançar" width={16} height={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
