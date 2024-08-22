import { useState, useEffect } from 'react';
import { TypeObj } from '../../App';
import Pagination from './Pagination';
import Card from './Card';
import {
  IPokemon,
  IPokemonList,
  ITypePokemon,
  ITypePokemonList,
} from './interfaces';
import * as S from './styles';

interface PokemonListProps {
  typeName?: string;
}

export default function PokemonList({ typeName }: PokemonListProps) {
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

  return (
    <S.PokemonListWrapper>
      <S.PokemonList>
        {typePokemonList
          ? typePokemonList?.map((typePokemonList, index) => {
              return <Card key={index} typePokemon={typePokemonList} />;
            })
          : pokemonList
            ? pokemonList?.map((pokemon, index) => {
                return <Card key={index} pokemon={pokemon} />;
              })
            : 'Carregando...'}
      </S.PokemonList>
      <Pagination page={page} setPage={setPage} />
    </S.PokemonListWrapper>
  );
}
