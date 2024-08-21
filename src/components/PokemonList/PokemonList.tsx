import Pagination from './Pagination';
import { useState, useEffect } from 'react';

interface IPokemon {
  name: string;
  url: string;
}

interface IPokemonList extends Array<IPokemon> {}

// interface PokemonListProps {}

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState<IPokemonList>();
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`,
      );
      const data = await response.json();
      setPokemonList(data?.results);
    };

    fetchPokemonList();
  }, [page]);

  const getPokemonPictureByURL = (url: string) => {
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
                      src={getPokemonPictureByURL(pokemon.url)}
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
