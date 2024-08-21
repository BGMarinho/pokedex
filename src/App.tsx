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
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPokemon = async () => {
      await fetch(`${BASE_URL}/pokemon?limit=20&offset=${page * 20}`)
        .then((response) => response.json())
        .then((response) => setPokemonList(response.results));
    };

    fetchPokemon();
  }, [page]);

  const getPokemonPicture = (url: string) => {
    const pokemon = url
      .replace('https://pokeapi.co/api/v2/pokemon/', '')
      .replace('/', '');
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`;
  };

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
        <div className="pagination">
          <button disabled={page <= 0} onClick={() => setPage(page - 1)}>
            <img src={leftArrow} alt="voltar" width={16} height={16} />
          </button>
          <p>{page + 1}</p>
          <button onClick={() => setPage(page + 1)}>
            <img src={rightArrow} alt="avançar" width={16} height={16} />
          </button>
        </div>
        <div className="wrapper">
          {pokemonList
            ? pokemonList?.map((pokemon, index) => {
                return (
                  <div key={index} className="card">
                    <div className="sprite-wrapper">
                      <img
                        src={getPokemonPicture(pokemon.url)}
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
