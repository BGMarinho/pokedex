import SearchBar from './components/SearchBar';
import ListContainer from './components/ListContainer';
import Pagination from './components/Pagination';
import { useState, useEffect } from 'react';

interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonList extends Array<Pokemon> {}

export default function App() {
  const BASE_URL = 'https://pokeapi.co/api/v2/';
  const [pokemonList, setPokemonList] = useState<PokemonList>();
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPokemon = async () => {
      await fetch(`${BASE_URL}/pokemon?limit=20&offset=${page * 20}`)
        .then((response) => response.json())
        .then((response) => setPokemonList(response.results));
    };

    fetchPokemon();
  }, [page]);

  return (
    <main>
      <section className="search-bar">
        <SearchBar />
      </section>
      <section className="pokemon-list">
        <Pagination page={page} setPage={setPage} />

        <ListContainer pokemonList={pokemonList} />
      </section>
    </main>
  );
}
