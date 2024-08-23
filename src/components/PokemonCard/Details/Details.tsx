import * as S from './styles';
import { useEffect, useState } from 'react';
import PokemonList from '../../PokemonList';

interface DetailsProps {
  identification?: number;
  showDetails?: boolean;
  typeName?: string;
  setTypeName: React.Dispatch<React.SetStateAction<string | undefined>>;
}

interface PokemonStats {
  base_stat: number;
  stat: { name: string };
}

type PokemonType = {
  type: { name: string };
};

export default function Details({
  showDetails,
  identification,
  typeName,
  setTypeName,
}: DetailsProps) {
  const [pokemonStats, setPokemonStats] = useState<{
    id: number;
    name: string;
    stats: PokemonStats[];
    types: PokemonType[];
  }>();

  useEffect(() => {
    const PokemonFetchByNameOrId = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${identification}/`,
      );
      const data = await response.json();
      setPokemonStats(data);
    };

    PokemonFetchByNameOrId();
  }, [showDetails]);

  return (
    <S.DetailsWrapper>
      <span>Número: {pokemonStats?.id}</span>
      <span>Nome: {pokemonStats?.name}</span>
      {pokemonStats?.stats.map((each, index) => {
        return (
          <span key={index}>
            {each.stat.name}: {each.base_stat}
          </span>
        );
      })}
      {pokemonStats?.types.map((type, index) => {
        return (
          <S.TypeButton key={index} onClick={() => setTypeName(type.type.name)}>
            {type.type.name}
          </S.TypeButton>
        );
      })}
    </S.DetailsWrapper>
  );
}
