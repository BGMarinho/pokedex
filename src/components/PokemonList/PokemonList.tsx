import {
  getPokemonPictureByURL,
  getPokemonPictureById,
} from '../../helpers/getPokemonPicture';
import { useState, useEffect } from 'react';
import { TypeObj } from '../../App';
import Pagination from './Pagination';

interface IPokemon {
  name: string;
  url: string;
}

interface IPokemonList extends Array<IPokemon> {}

interface ITypePokemon {
  pokemon: IPokemon;
}

interface ITypePokemonList extends Array<ITypePokemon> {}

interface PokemonListProps {
  types?: TypeObj[];
  typeName?: string;
}

export default function PokemonList({ typeName, types }: PokemonListProps) {
  const [pokemonList, setPokemonList] = useState<IPokemonList>();
  const [page, setPage] = useState(0);
  const [typePokemonList, setTypePokemonList] = useState<ITypePokemonList>();

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

  useEffect(() => {
    const PokemonListFetchByType = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/type/${typeName}`,
      );
      const data = await response.json();
      setTypePokemonList(data.pokemon);
    };

    PokemonListFetchByType();
  }, [typeName]);

  console.log(typePokemonList);
  return (
    <>
      <div className="wrapper">
        {typePokemonList ? (
          <>
            {typePokemonList?.map((pokemonList, index) => {
              return (
                <div key={index} className="card">
                  <div className="sprite-wrapper">
                    <img
                      src={getPokemonPictureByURL(pokemonList.pokemon.url)}
                      alt={pokemonList.pokemon.name}
                    />
                    <span>{pokemonList.pokemon.name}</span>
                  </div>
                </div>
              );
            })}
          </>
        ) : pokemonList ? (
          pokemonList?.map((pokemon, index) => {
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
        ) : (
          'Carregando...'
        )}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
}
