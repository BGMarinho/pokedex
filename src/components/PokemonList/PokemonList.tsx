import Pagination from './Pagination';
import { useState, useEffect } from 'react';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonList extends Array<Pokemon> {}

interface PokemonListProps {}

export default function PokemonList({}: PokemonListProps) {
  const BASE_URL = 'https://pokeapi.co/api/v2/';
  const [pokemonList, setPokemonList] = useState<PokemonList>();
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPokemonList = async () => {
      await fetch(`${BASE_URL}/pokemon?limit=20&offset=${page * 20}`)
        .then((response) => response.json())
        .then((response) => setPokemonList(response.results));
    };

    fetchPokemonList();
  }, [page]);

  const getPokemonPicture = (url: string) => {
    const pokemon = url
      .replace('https://pokeapi.co/api/v2/pokemon/', '')
      .replace('/', '');
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`;
  };

  return (
    <>
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
      <Pagination page={page} setPage={setPage} />
    </>
  );
}
